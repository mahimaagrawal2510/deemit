export const data = [
    {
        header: "EBITDA & EBITDA Margin",
        content: `<div><div><p>- EBITDA stands for Earnings&nbsp;Before&nbsp;Interest,&nbsp;Tax,&nbsp;Depreciation,&nbsp;Amortization &amp; Rent.<br>
        - Measures operating profitability of the company by deducting operating expenses from total revenue.<br>
        - To calculate EBITDA add back non-cash expense like depreciation &amp;&nbsp;amortization<br>
        - EBIDTA margin expressed as % of sales.&nbsp;Used to measure how much cash profit a company&nbsp;makes relative to its total revenue<br>
        - Compared across time periods &amp; across different companies in same industry<br>
        - Used for calculation of other ratios like EV/EBIDTA</p>
        <br/>
        <p><strong>Example</strong></p>
        <table width="385">
        <tbody>
        <tr>
        <td width="172">Particulars</td>
        <td width="213">Amount</td>
        </tr>
        <tr>
        <td width="172">Revenue</td>
        <td width="213">10,00,000</td>
        </tr>
        <tr>
        <td width="172">Expenses</td>
        <td width="213"></td>
        </tr>
        <tr>
        <td width="172">Salaries</td>
        <td width="213">3,00,000</td>
        </tr>
        <tr>
        <td width="172">Rent</td>
        <td width="213">1,60,000</td>
        </tr>
        <tr>
        <td width="172">Depreciation</td>
        <td width="213">40,000</td>
        </tr>
        <tr>
        <td width="172">Advertising</td>
        <td width="213">1,00,000</td>
        </tr>
        <tr>
        <td width="172"><strong>Operating Expenses</strong></td>
        <td width="213"><strong>7,00,000</strong></td>
        </tr>
        </tbody>
        </table>
        <br/>
        <p>In the above example, revenue for a company in a given period is 10 lakhs and operating expenses is 7 lakhs, To calculate EBITDA deduct operating expenses and add back non cash expenditure like depreciation.</p><br/>
        <h5><strong>EBITDA&nbsp;&nbsp;</strong></h5>
        <p>=Revenue-Operating Exps Depreciation<br>
        =10,00,000-7,00,000+40,000<br>
        =3,40,000</p><br/>
        <p><strong>EBITDA Margin&nbsp;</strong><br>
        =EBIDTA/Revenue*100<br>
        =3,40,000/10,00,000*100<br>
        =34%</p>
        </div></div>`
    },
    {
        header: "EARNINGS PER SHARE (EPS)",
        content: `<div><p>–&nbsp;EPS is company’s net profit divided by number of outstanding equity shares<br>
– Breaks down&nbsp;company’s net profit on per equity share basis<br>
– Indicator of company’s profitability<br>
– Used to calculate&nbsp;price to earnings (P/E) ratio<br>
– Important variable in determining the share price<br><br/>
<strong>Formula&nbsp;</strong><br>
EPS= PAT/Total outstanding shares<br>
PAT=Profit After Tax<br><br/>
<strong>EXAMPLE&nbsp;&nbsp;</strong><br>
<p>How to calculate EPS?</p>
<p>Let’s take example of Hindustan Unilever (HUL) to calculate EPS for FY21</p>
<strong>HUL:FY21</strong><br>
PAT = Rs8,089 crore<br>
Total outstanding equity shares as on end of March 2021 = 235cr<br>
<strong>HUL FY21 EPS</strong><br>
= PAT/Outstanding equity&nbsp;shares<br>
=8089/235<br>
=34.4<br>
<strong>FORWARD EPS&nbsp;</strong><br>
– Assuming profits in go up to 9000cr in the next financial year FY22<br>
– 9000/235<br>
=38.2</p>
</div>`
    },
    {
        header: "PRICE TO EARNINGS RATIO (P/E)",
        content: `<div ><p>-Ratio of Company’s stock&nbsp;price&nbsp;to its&nbsp;Earning Per Share&nbsp;(EPS)<br>
-Tool used for valuing companies in the same industry or value of the same company over a period of time<br>
-Indication of how much an investor is willing to pay for company’s earnings<br>
-PE ratio varies for industry to industry<br>
-Determines if stock is&nbsp;undervalued&nbsp;or overvalued<br>
<br>
<strong>Formula&nbsp;</strong><br>
P/E = Stock Price/EPS<br><br>
<strong>How to Calculate P/E Ratio</strong><br>
Example-Company X stock which is trading at 100 with an EPS of 10<br>
P/E&nbsp;=Price/EPS<br>
=100/10<br>
10x</p>
</div>`
    },
    {
        header: "WHAT IS TRAILING P/E and FORWARD P/E?",
        content: `<div><p><strong>Trailing P/E</strong><br>
Trailing P/E multiple is based on last 12 months of actual earnings.<br>
It is calculated by taking current stock price and dividing by trailing EPS.</p>
<p>Taking HUL example again where we calculated its EPS<br>
HUL CMP-2100<br>
FY21 EPS- 34.4<br>
FY21 P/E =2100/34.4<br>
<strong>Trailing P/E =&nbsp;61x</strong></p>
<p><strong>Forward P/E&nbsp;</strong><br>
To calculate forward P/E we take forward EPS.<br>
Use projected earnings for forward P/E calculation.<br>
Estimates a company’s likely earnings per share for a given fiscal.</p>
<p>Using the same example of HUL, here is how you can calculate FY22 P/E<br>
Forward P/E=Price/Forward EPS<br>
FY22 P/E=2100/38.2<br>
<strong>=55x</strong></p>
</div>`
    },
    {
        header: "HOW TO READ P/E OF COMPANIES ON THE SAME SECTOR?",
        content: `<div><p><strong>COMPANY A&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; COMPANY B</strong></p>
<p>CMP&nbsp; &nbsp; &nbsp; &nbsp;100&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;50</p>
<p>EPS&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;10&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2</p>
<p>P/E&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 100/10=&nbsp;10x&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;50/2=25x</p>
<p>On the face of it may look like lower P/E is better because investor has to pay 10x for buying the share of Company A compared to 25x for company B. But the reason for lower multiple could also be weak outlook or the stock could be actually under-priced.</p>
<p><strong>Low P/E Means</strong></p>
<p>– Underpriced stock<br>
– Weak outlook<br>
– Investigate causes for discount<br>
– Compare with similar companies</p>
<p><strong>High P/E</strong><br>
– Overpriced stock<br>
– Robust outlook<br>
– Investigate causes for premium<br>
– Compare with similar companies</p>
</div>`
    },
    {
        header: "RETURN ON EQUITY (ROE)",
        content: `<div><p>-ROE shows how much a company earns for&nbsp;its equity shareholders<br>
-ROE is the profitability of a company as a % of its shareholder funds</p>
<p><strong>How to Calculate ROE</strong>?<br>
ROE=Net Profit After Tax/Shareholder Funds<br>
Shareholder&nbsp;Funds =&nbsp;Share capital + Free Reserves</p>
<p><strong>Return On Capital Employed (ROCE)</strong><br>
-Ability of the company to earn return from all the capital it employs<br>
-ROCE calculates includes debt also besides equity</p>
</div>`
    },
    {
        header: "HOW TO CALCULATE ROCE?",
        content: `<div><p>ROCE=EBIT/Capital Employed<br>
EBIT=EBITDA-Depreciation</p>
<p>Capital employed=Shareholder&nbsp;Funds +&nbsp;Debt</p>
<p>OR</p>
<p>Capital Employed=Total Assets-Current Liabilities</p>
</div>`
    },
    {
        header: "FEATURES OF ROE & ROCE",
        content: `<div><p>-Most important ratios in understanding a business<br>
-Both ROE and ROCE measure company’s efficiency in generating profits<br>
-ROE means how well a company is&nbsp;managed in order to deliver net profits to shareholders<br>
-ROCE means how well a company uses its assets to deliver net profits to shareholders<br>
-Capital employed is the capital required to make earnings, a high ROCE is evidence of efficient use of capital<br>
-Both the ratios are compared across periods, compared&nbsp;in the industry</p>
<p>&nbsp;</p>
<table width="448">
<tbody>
<tr>
<td width="252"><strong>ROE</strong></td>
<td width="196"><strong>ROCE</strong></td>
</tr>
<tr>
<td width="252">Considers net return on equity</td>
<td width="196">Includes both Debt &amp; Equity</td>
</tr>
<tr>
<td width="252">Measures profits generated on shareholders equity</td>
<td width="196">Measures how efficiently capital is used to generate additional profit</td>
</tr>
<tr>
<td width="252">Better indicator of how good your investment is</td>
<td width="196">Better indicator of how profitable your biz is</td>
</tr>
</tbody>
</table>
<p><strong>&nbsp;</strong></p>
</div>`
    },
    {
        header: "COMPOUNDED ANNUAL RATE OF RETURN (CAGR)",
        content: `<div><p>- Shows rate of return of an investment over a certain period of time in percentage<br>
- Calculated on a point-to-point basis, its not year on year growth<br>
- Useful measure to calculate growth over multiple time periods<br>
- Used to analyse sales, earnings growth or stock price return over a period of time<br>
- Dampens the effect of volatility as a stock or mutual fund may not provide same return every year<br>
- Accounts for power of compounding<br>
- Assumption: You re-invest your return every year<br>
- Not the same as recurring annual return or an absolute return on an investment</p>
</div>`
    },
    {
        header: "HOW DO YOU CALCULATE CAGR?",
        content: `<div><p>CAGR=(End Value/Beginning Value)^1/years – 1<br>
<strong>Example-Let’s calculate Nifty’s CAGR return of last 10 years</strong></p>
<p><strong>Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nifty&nbsp;&nbsp;&nbsp;&nbsp;</strong></p>
<p>2021&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17,354</p>
<p>2011&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;4,624</p>
<p>&nbsp;</p>
<p>CAGR&nbsp;&nbsp;= (End Value/Beginning Value)^1/years-1<br>
= (17,354/4624)^1/10 -1<br>
= 3.75^1/10 – 1<br>
= 14.14%</p>
<p>*Does this mean the Nifty rose 14.14% every year? <strong>NO</strong><br>
*14.14 % indicates steady rate of return over a period of 10 years<br>
*14.14% does not indicate the same return every year for 10 years</p>
<p>Let’s look at Nifty return in these 10 years and compare with CAGR.</p>
<table width="204">
<tbody>
<tr>
<td width="100"><strong>Year</strong></td>
<td width="104"><strong>Nifty Return</strong></td>
</tr>
<tr>
<td width="100">2021</td>
<td width="104">24%</td>
</tr>
<tr>
<td width="100">2020</td>
<td width="104">15%</td>
</tr>
<tr>
<td width="100">2019</td>
<td width="104">12%</td>
</tr>
<tr>
<td width="100">2018</td>
<td width="104">3%</td>
</tr>
<tr>
<td width="100">2017</td>
<td width="104">29%</td>
</tr>
<tr>
<td width="100">2016</td>
<td width="104">3%</td>
</tr>
<tr>
<td width="100">2015</td>
<td width="104">-4%</td>
</tr>
<tr>
<td width="100">2014</td>
<td width="104">31%</td>
</tr>
<tr>
<td width="100">2013</td>
<td width="104">7%</td>
</tr>
<tr>
<td width="100">2012</td>
<td width="104">28%</td>
</tr>
<tr>
<td width="100">2011</td>
<td width="104">-25%</td>
</tr>
<tr>
<td width="100"></td>
<td width="104"></td>
</tr>
</tbody>
</table>
<p>*Nifty Giving 14% CAGR return in last 10 years hides volatility during the period<br>
*Tells you what an investment yields on an annual compounded basis</p>
</div>`
    },
    {
        header: "DIFFERENCE BETWEEN CAGR AND ABSOLUTE RETURN",
        content: `<div><p>Let’s take an example of below investment to see the difference between CAGR and absolute return where an investment of Rs1000 is valued at Rs1500 after 2 years.<br>
<strong>Year&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Investment</strong></p>
<p>1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1000</p>
<p>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2000</p>
<p>3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1500</p>
<p>CAGR&nbsp;= (End Value/Beginning Value)^1/years-1<br>
= 1500/1000^1/2-1<br>
= 1.5^.5-1<br>
= 22.4%</p>
<p style="text-align: left;"><strong>Absolute Return = 1500-1000/100×100</strong><br>
<strong>= 50%</strong></p>
</div>`
    },
    {
        header: "WORKING CAPITAL",
        content: `<div><p>- Money required to run the day-to-day operations of the business<br>
- A very important metric to measure the operational efficiency of a business<br>
- Working capital provides liquidity to the operations of a company<br>
- Tells if company has enough short term assets to take care of short-term debts</p>
</div>`
    },
    {
        header: "HOW TO CALCULATE WORKING CAPITAL?",
        content: `<div><p>Working Capital = Current Assets – Current Liabilities</p>
<p><strong>Current Assets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current Liabilities</strong></p>
<p>Inventories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Financial Liabilities</p>
<p>Financial assets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trade Payables</p>
<p>Investments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Provisions</p>
<p>Trade Receivables</p>
<p>Cash/bank balances</p>
<p>Other financial assets</p>
<p><strong>*What is working capital ratio and how should one read this ratio?</strong><br>
Ratio between 1.2 to 2 is considered good<br>
Ratio below 1 indicates liquidity problems</p>
</div>`
    },
    {
        header: "ENTERPRISE VALUE(EV)",
        content: `<div ><p>- EV is a measure of company’s market value rather than equity value<br>
- Used as an alternative to market capitalisation for acquiring a company<br>
- Considered as one of the best measures to evaluate the cost of buying a company<br>
- Includes net debt and market capitalisation<br>
- Useful for companies where PAT is negative<br>
- Used more for manufacturing/cyclical companies where high capital is required<br>
- Better indicator than Market cap for mergers/acquisitions<br>
- Used to calculate other important ratios like EV/EBITDA, EV/Sales, EV/EBIT<br>
- EV/EBIDTA is sometimes more useful than P/E when comparing firms with different financial leverage</p>
</div>`
    },
    {
        header: "HOW TO CALCLUATE EV?",
        content: `<div><p>EV = Market Capitalisation + Net Debt</p>
<p>Net Debt = Debt – Cash/Liquid Investments</p>
<p>Market Cap = Share price multiplied by outstanding shares</p>
</div>`
    },
    {
        header: "WHY IS CASH DEDUCTED FROM CALCULATING EV?",
        content: `<div><p><strong>Why is cash deducted from calculating EV?</strong><br>
A company acquiring another company gets to keep the cash of the acquiring company</p>
<p><strong>Example</strong></p>
<table>
<tbody>
<tr>
<td width="200"></td>
<td width="200"><strong>Company A</strong></td>
<td width="200"><strong>Company B</strong></td>
</tr>
<tr>
<td width="200">Market Cap</td>
<td width="200">100</td>
<td width="200">100</td>
</tr>
<tr>
<td width="200">Debt</td>
<td width="200">0</td>
<td width="200">30</td>
</tr>
<tr>
<td width="200">Cash</td>
<td width="200">10</td>
<td width="200">5</td>
</tr>
<tr>
<td width="200"><strong>EV</strong></td>
<td width="200"><strong>90</strong></td>
<td width="200"><strong>125</strong></td>
</tr>
</tbody>
</table>
<p>Which company is expensive to acquire?</p>
<p><strong>Answer-Company B</strong></p>
<p>*A company with more cash than debt will have EV less than its Market cap<br>
*A company with more debt than cash will have EV more than its Market cap</p>
</div>`
    },
    {
        header: "BOOK VALUE",
        content: `<div><p>- Value of the company to equity shareholders<br>
- Represents company’s worth if it liquidated its assets and paid back all its liabilities<br>
- Value at which an asset/security is carried into balance sheet &amp; not acquisition price<br>
- Book Value of a stock is equivalent to networth of company<br>
<strong>- Book Value is also known as shareholders’ equity or Net worth</strong></p>
</div>`
    },
    {
        header: "HOW TO CALCULATE BOOK VALUE?",
        content: `<div><p>Book Value = Total Assets – Total Liabilities – Intangible Assets<br>
Book Value = Share Capital + Free Reserves<br>
Book Value Per Share = Total Shareholders’ Equity/Number Of Equity Shares</p>
</div>`
    },
    {
        header: "HOW DO YOU CALCULATE BOOK VALUE OF A STOCK?",
        content: `<div><table>
<tbody>
<tr>
<td width="301"><strong>State Bank of India</strong></td>
<td width="301"><strong>As on FY21(in crs)</strong></td>
</tr>
<tr>
<td width="301">Share Capital</td>
<td width="301">892.4</td>
</tr>
<tr>
<td width="301">Reserves</td>
<td width="301">2,74,668</td>
</tr>
<tr>
<td width="301"><strong>Book Value/Net Worth /Shareholders’ Equity&nbsp;</strong></td>
<td width="301"><strong>2,75,560</strong></td>
</tr>
<tr>
<td width="301"></td>
<td width="301"></td>
</tr>
<tr>
<td width="301"><strong>Book Value per share</strong></td>
<td width="301"></td>
</tr>
<tr>
<td width="301"><strong>Total outstanding shares</strong></td>
<td width="301">892cr shares</td>
</tr>
<tr>
<td width="301">Book value per share</td>
<td width="301">2,75,560</td>
</tr>
<tr>
<td width="301"></td>
<td width="301">309 per share</td>
</tr>
</tbody>
</table>
</div>`
    },
    {
        header: "WHAT IS PRICE/BOOK (P/B)?",
        content: `<div><p>- Ratio used to compare market value to book value<br>
- Helps in analysing if stock is under or over priced<br>
- Lower P/B ratio could mean that stock is undervalued<br>
- Important ratios for banks<br>
- Price/Book below 1 for a stock is considered undervalued<br>
- Price/Book above 1 is considered overvalued</p>
</div>`
    },
    {
        header: "HOW TO CALCULATE P/B?",
        content: `<div><p>=Market Price per Share / Book Value per Share<br>
SBI&nbsp; CMP&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 510<br>
Book Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;309<br>
<strong>Price/Book&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.6x</strong></p>
</div>`
    },
    {
        header: "HOW TO CALCULATE BOOK VALUE OF AN ASSET?",
        content: `<div><p>Asset Value – Depreciation</p>
<p><strong>Example&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value</strong></p>
<p>Asset Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1,00,000</p>
<p>Depreciation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15,000</p>
<p><strong>Book Value&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85,000</strong></p>
</div>`
    }
]