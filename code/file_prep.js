const html = $json.html;

return {
  binary: {
    data: {
      data: Buffer.from(html).toString('base64'),
      mimeType: 'text/html',
      fileName: `${$json.company.replace(/\s+/g,'-')}.html`
    }
  }
};