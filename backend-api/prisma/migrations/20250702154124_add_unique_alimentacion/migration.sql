-- CreateTable
CREATE TABLE "Alimentacion" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "numero_comida" INTEGER NOT NULL,
    "hora" TEXT NOT NULL,
    "cantidad_comida" INTEGER NOT NULL,

    CONSTRAINT "id_alimentacion" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historial" (
    "id_alimentacion" INTEGER NOT NULL,
    "fecha_alimentacion" DATE NOT NULL,
    "isCompletado" BOOLEAN NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "id_historial" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "id_usuario" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alimentacion_id_usuario_numero_comida_key" ON "Alimentacion"("id_usuario", "numero_comida");

-- CreateIndex
CREATE UNIQUE INDEX "correo" ON "Usuario"("correo");

-- AddForeignKey
ALTER TABLE "Alimentacion" ADD CONSTRAINT "id_usuario" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Historial" ADD CONSTRAINT "id_alimentacion" FOREIGN KEY ("id_alimentacion") REFERENCES "Alimentacion"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
