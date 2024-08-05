
import path from 'path';
import sharp from 'sharp';

/**
 * Used to Resize Image
 */
const resizeImage = (file, width, height) => {

    const fileName = `[${height}*${width}]-${file.name}`;

    const resizeUploadPath = path.join(__dirname, './../../public/images-resize/', fileName);
    sharp(file.data).resize(width, height).jpeg({ mozjpeg: true }).toFile(resizeUploadPath);
};

/**
 * Used to Upload Image
 */
const fileUpload = async (files) => {

    try {

        const file = files.image;
        const fileName = file.name;
        const uploadPath = path.join(__dirname, './../../public/images/', fileName);
        
        resizeImage(file, 350, 200);
        await file.mv(uploadPath);

        return { status: 200, path: `public/images/${fileName}` };

    } catch (error: any) {
        
        return { status: 500, path: error.message };
    }
};

export {
    fileUpload,
};
