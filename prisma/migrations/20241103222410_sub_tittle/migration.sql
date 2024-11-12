/*
  Warnings:

  - You are about to drop the column `subtitle` on the `Posts` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Posts] DROP COLUMN [subtitle];
ALTER TABLE [dbo].[Posts] ADD [sub_tittle] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
