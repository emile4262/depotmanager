import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SalesService {
  private prisma = new PrismaClient();

  async createSale(tenantId: string, depotId: string, dto: any) {
    return this.prisma.$transaction(async (tx: any) => {
      let totalAmount = 0;
      for (const line of dto.lines) {
        const product = await tx.product.findUnique({ where: { id: line.productId } });
        if (!product) throw new BadRequestException(`Produit introuvable`);
        totalAmount += Number(product.salePrice) * line.quantity;
      }

      const sale = await tx.sale.create({
        data: {
          tenantId,
          depotId,
          customerId: dto.customerId,
          totalAmount,
          paidAmount: dto.paidAmount,
          status: dto.paidAmount >= totalAmount ? 'COMPLETED' : 'CREDIT',
          paymentMethod: dto.paymentMethod,
          lines: {
            create: dto.lines.map((l: any) => ({
              productId: l.productId,
              quantity: l.quantity,
              unitPrice: l.unitPrice,
              totalLine: l.quantity * l.unitPrice,
            })),
          },
        },
        include: { lines: true },
      });

      return sale;
    });
  }
}
