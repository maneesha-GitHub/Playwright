import {test} from "@playwright/test"
import { chromium } from 'playwright';
import * as ExcelJS from 'exceljs';

test ("Excel", async({page})=>{
    await page.goto("https://www.policybazaar.com");
    await page.getByRole('link', { name: 'Insurance Products' }).click();
    const text = await page.getByText('Health Insurance Family').first().textContent();

    if (!text) {
        throw new Error('Text content could not be found.');
    }

    await page.close();
    const lines = text.split('\n');

    const workbook = new ExcelJS.Workbook();
    const worksheet1 = workbook.addWorksheet('Sheet1');
    const worksheet2 = workbook.addWorksheet('sheet2');
    worksheet1.addRow(['Header 1']); 
    worksheet2.addRow(['zindhagi']);
    worksheet2.addRow(['8712316628']);
    
    
    lines.forEach((line, index)=>{
        worksheet1.addRow([line]);
        worksheet2.addRow([line]);

    });
    
    await workbook.xlsx.writeFile('result.xlsx');
    console.log('Text content written to result.xlsx');
});

