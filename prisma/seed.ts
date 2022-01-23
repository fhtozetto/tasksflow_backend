import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();

    await prisma.products.deleteMany({});
    await prisma.barcodes.deleteMany({});
    await prisma.validity.deleteMany({});

    const product1 = await prisma.products.create({
        data: {
            erp_code: "16304",
            description: "AGUA MIN CRYSTAL PET 1L S/G",
            barcodes: {
                create: [
                    {
                        barcode: "7894900530025"
                    },
                    {
                        barcode: "7894900530261"
                    }
                ]
            },
        },
    });

    const product2 = await prisma.products.create({
        data: {
            erp_code: "20399",
            description: "REFRI COCA COLA LT 350ML",
            barcodes: {
                create: [
                    {
                        barcode: "7894900010015"
                    },
                    {
                        barcode: "5900000029269"
                    },
                    {
                        barcode: "7894900010046"
                    },
                    {
                        barcode: "7894900019841"
                    },
                ]
            },
        },
    });

    const product3 = await prisma.products.create({
        data: {
            erp_code: "49849",
            description: "CHOC GAROTO 16G BATON AO LEITE",
            barcodes: {
                create: [
                    {
                        barcode: "78912359"
                    },
                    {
                        barcode: "27891008367038"
                    },
                    {
                        barcode: "7891008367027"
                    },
                ]
            },
        },
    });

    console.log({ product1, product2, product3 });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });