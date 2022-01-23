/*
  Warnings:

  - A unique constraint covering the columns `[erp_code]` on the table `products` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "products_erp_code_key" ON "products"("erp_code");
