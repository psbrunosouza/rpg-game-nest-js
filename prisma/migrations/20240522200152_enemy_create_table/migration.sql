-- CreateTable
CREATE TABLE "Enemy" (
    "id" SERIAL NOT NULL,
    "life" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "gameId" INTEGER,

    CONSTRAINT "Enemy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Enemy" ADD CONSTRAINT "Enemy_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
