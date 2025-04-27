-- CreateTable
CREATE TABLE `PixCharge` (
    `id` VARCHAR(191) NOT NULL,
    `externalIdentifier` VARCHAR(191) NOT NULL,
    `transactionType` ENUM('pixDynamic', 'pixStatic') NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `description` VARCHAR(191) NULL,
    `dueDate` DATETIME(3) NULL,
    `instructionText` VARCHAR(191) NULL,
    `qrCode` VARCHAR(191) NULL,
    `qrImage` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PixCharge_externalIdentifier_key`(`externalIdentifier`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WebhookNotification` (
    `id` VARCHAR(191) NOT NULL,
    `trackingCode` VARCHAR(191) NULL,
    `statusName` VARCHAR(191) NULL,
    `payerId` VARCHAR(191) NULL,
    `payerName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
