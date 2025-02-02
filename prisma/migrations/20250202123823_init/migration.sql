-- CreateTable
CREATE TABLE "Carro" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "marca" TEXT NOT NULL,
    "cor" TEXT NOT NULL,

    CONSTRAINT "Carro_pkey" PRIMARY KEY ("id")
);
