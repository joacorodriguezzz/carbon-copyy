import { Express } from "express";
import puppeteer from "puppeteer";
app.get("/capture", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(
    '<div id="code-editor-container">Contenido del editor de código aquí</div>'
  );
  const screenshot = await page.screenshot({ encoding: "base64" });
  await browser.close();

  res.send(screenshot);
});

app.listen(port, () => {
  console.log(
    `Servidor de captura de pantalla escuchando en http://localhost:${port}`
  );
});
