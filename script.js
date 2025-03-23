/***********************************************
 * script.js: main logic for our pricing app
 ************************************************/
const pricingData = {
  "professionalServices": {
    "rateIndia": 109,
    "rateOutside": 174
  },
  "baseLicense": {
    "developerBased": {
      "Enterprise": {
        "Self Host": 15000,
        "Cloud": 0
      },
      "Business": {
        "Self Host": 10000,
        "Cloud": 0
      }
    },
    "userBased": {
      "Enterprise": {
        "Self Host": 15000,
        "Cloud": 15000
      },
      "Business": {
        "Self Host": 10000,
        "Cloud": 0
      }
    },
    "usageBased": {
      "Enterprise": {
        "Self Host": 0,
        "Cloud": 0
      },
      "Business": {
        "Self Host": 0,
        "Cloud": 0
      }
    }
  },
  "licensingTiers": {
    "developerBased": {
      "Enterprise": {
        "Self Host": {
          "baseDev": 5,
          "tier1Range": [6, 10],
          "tier1Price": 3500,
          "tier2Range": [11, 100],
          "tier2Price": 2500,
          "tier3Price": 1500
        },
        "Cloud": null
      },
      "Business": {
        "Self Host": {
          "baseDev": 1,
          "tier1Range": [2, 10],
          "tier1Price": 2500,
          "tier2Range": [11, 100],
          "tier2Price": 2000,
          "tier3Price": 1000
        },
        "Cloud": null
      }
    },
    "userBased": {
      "Enterprise": {
        "Self Host": [
          { "maxUsers": 100,  "monthlyRate": 50 },
          { "maxUsers": 300,  "monthlyRate": 35 },
          { "maxUsers": null, "monthlyRate": 20 }
        ],
        "Cloud": [
          { "maxUsers": 100,  "monthlyRate": 50 },
          { "maxUsers": 300,  "monthlyRate": 35 },
          { "maxUsers": null, "monthlyRate": 15 }
        ]
      },
      "Business": {
        "Self Host": [
          { "maxUsers": 100,  "monthlyRate": 25 },
          { "maxUsers": 300,  "monthlyRate": 20 },
          { "maxUsers": null, "monthlyRate": 20 }
        ],
        "Cloud": [
          { "maxUsers": 100,  "monthlyRate": 25 },
          { "maxUsers": 300,  "monthlyRate": 20 },
          { "maxUsers": null, "monthlyRate": 15 }
        ]
      }
    },
    "usageBased": {
      "Business": [
        { "tierKey": "125k", "monthly": 500 },
        { "tierKey": "250k", "monthly": 1000 }
      ],
      "Enterprise": [
        { "tierKey": "500k", "monthly": 3500 },
        { "tierKey": "1mn",  "monthly": 7000 },
        { "tierKey": "2mn",  "monthly": 12000 },
        { "tierKey": "5mn",  "monthly": 25000 }
      ]
    }
  },
  "addOns": {
    "developerBased": {
      "unlimitedPdf": 15000,
      "unlimitedAutomation": 15000,
      "unlimitedPublicApps": 15000,
      "securedEmbed": 2500,
      "fileStorage": 2500,
      "dbStorage": 2500
    },
    "userBased": {
      "pdf": [
        { "tier": "10k",       "annualCost": 1800 },
        { "tier": "50k",       "annualCost": 7200 }
      ],
      "automation": [
        { "tier": "2.5k",     "annualCost": 600 },
        { "tier": "10k",      "annualCost": 1800 },
        { "tier": "50k",      "annualCost": 7200 },
        { "tier": "unlimited", "annualCost": 15000 }
      ],
      "publicApps": [
        { "tier": "10k", "annualCost": 1500 },
        { "tier": "50k", "annualCost": 7200 },
        { "tier": "unlimited", "annualCost": 15000 }
      ],
      "fileStorage": [
        { "tier": "10GB",  "annualCost": 600 },
        { "tier": "50GB",  "annualCost": 1200 },
        { "tier": "100GB", "annualCost": 2400 },
        { "tier": "unlimited", "annualCost": 600 }
      ],
      "dbStorage": [
        { "tier": "10GB",  "annualCost": 1200 },
        { "tier": "50GB",  "annualCost": 2400 },
        { "tier": "unlimited", "annualCost": 600 }
      ]
    },
    "usageBased": {
      "pdfUnlimitedMo": 50,
      "automationUnlimitedMo": 50,
      "fileStorage": {
        "cloud": [
          { "tier": "10GB",  "monthly": 50 },
          { "tier": "50GB",  "monthly": 100 },
          { "tier": "100GB", "monthly": 200 }
        ],
        "selfHost": [
          { "tier": "unlimitedFS", "monthly": 50 },
          { "tier": "10GB",       "monthly": 50 },
          { "tier": "50GB",       "monthly": 100 },
          { "tier": "100GB",      "monthly": 200 }
        ]
      },
      "dbStorage": {
        "cloud": [
          { "tier": "10GB", "monthly": 100 },
          { "tier": "50GB", "monthly": 200 }
        ],
        "selfHost": [
          { "tier": "unlimitedDB", "monthly": 50 },
          { "tier": "10GB",       "monthly": 100 },
          { "tier": "50GB",       "monthly": 200 }
        ]
      },
      "dashboardUnlimitedMo": 1000,
      "publicAppsUnlimitedMo": 50
    }
  }
};

pricingData.addOnsFlat =[
  {
    "deployment": "Self host",
    "model": "Developer",
    "addon": "PDF",
    "qty": "Unlimited",
    "price_per_year": 15000,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Developer",
    "addon": "Automation",
    "qty": "Unlimited",
    "price_per_year": 15000,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Developer",
    "addon": "Public Apps",
    "qty": "Unlimited",
    "price_per_year": 15000,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Developer",
    "addon": "Secured Embed",
    "qty": "Unlimited",
    "price_per_year": 2500,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Developer",
    "addon": "File Storage",
    "qty": "Unlimited",
    "price_per_year": 2500,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Developer",
    "addon": "DB Storage",
    "qty": "Unlimited",
    "price_per_year": 2500,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "PDF",
    "qty": "10K",
    "price_per_year": 1800,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "PDF",
    "qty": "50K",
    "price_per_year": 7200,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Automation",
    "qty": "2.5k",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Automation",
    "qty": "10k",
    "price_per_year": 1800,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Automation",
    "qty": "50k",
    "price_per_year": 7200,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Automation",
    "qty": "Unlimited",
    "price_per_year": 15000,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Public Apps",
    "qty": "Unlimited",
    "price_per_year": 15000,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Public Apps",
    "qty": "10k",
    "price_per_year": 1500,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Public Apps",
    "qty": "50k",
    "price_per_year": 7200,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "Secured Embed",
    "qty": "Unlimited",
    "price_per_year": 600,
    "notes": "will get you 2500 Page views included.\nenterprise plan customers cost is 2500$"
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "File Storage",
    "qty": "Unlimited",
    "price_per_year": 2500,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "User Based",
    "addon": "DB Storage",
    "qty": "Unlimited",
    "price_per_year": 2500,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Usage Based",
    "addon": "PDF",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Usage Based",
    "addon": "Automation",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Usage Based",
    "addon": "Public Apps",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Usage Based",
    "addon": "Secured Embed",
    "qty": "NA",
    "price_per_year": null,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Usage Based",
    "addon": "File Storage",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Self host",
    "model": "Usage Based",
    "addon": "DB Storage",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "PDF",
    "qty": "10K",
    "price_per_year": 2400,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "PDF",
    "qty": "50K",
    "price_per_year": 10200,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Automation",
    "qty": "2.5k",
    "price_per_year": 600,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Automation",
    "qty": "5k",
    "price_per_year": 1200,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Automation",
    "qty": "10k",
    "price_per_year": 1800,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Public Apps",
    "qty": "5k",
    "price_per_year": 1200,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Public Apps",
    "qty": "10k",
    "price_per_year": 2400,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Public Apps",
    "qty": "50k",
    "price_per_year": 10200,
    "notes": ""
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "Secured Embed",
    "qty": "Unlimited",
    "price_per_year": 600,
    "notes": "will get you 2500 Page views included.\nenterprise plan customers cost is 2500$"
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "File Storage",
    "qty": "10GB",
    "price_per_year": 600,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "File Storage",
    "qty": "50GB",
    "price_per_year": 1200,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "File Storage",
    "qty": "100GB",
    "price_per_year": 2400,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "DB Storage",
    "qty": "10GB",
    "price_per_year": 1200,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "User Based",
    "addon": "DB Storage",
    "qty": "50GB",
    "price_per_year": 2400,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "PDF",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": "Every run will be counted in their overall tasks"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "Automation",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": "Every run will be counted in their overall tasks"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "Public Apps",
    "qty": "Activation",
    "price_per_year": 600,
    "notes": "Every run will be counted in their overall tasks"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "File Storage",
    "qty": "10GB",
    "price_per_year": 600,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "File Storage",
    "qty": "50GB",
    "price_per_year": 1200,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "File Storage",
    "qty": "100GB",
    "price_per_year": 2400,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "DB Storage",
    "qty": "10GB",
    "price_per_year": 1200,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
    "deployment": "Cloud",
    "model": "Usage Based",
    "addon": "DB Storage",
    "qty": "50GB",
    "price_per_year": 2400,
    "notes": "Storage units are not monthly but fixed through the term of their license"
  },
  {
  "deployment": "Cloud",
  "model": "Usage Based",
  "addon": "Dashboard",
  "qty": "Activation",
  "price_per_year": 3000,
  "notes": "Dashboard access activation fee for usage-based cloud deployment"
}
  
];

// references
const planSelect       = document.getElementById('planSelect');
const modelSelect      = document.getElementById('modelSelect');
const deploySelect     = document.getElementById('deploySelect');
//alert(JSON.stringify(deploySelect.value));
const developerSec     = document.getElementById('developerSection');
const userSec          = document.getElementById('userSection');
const usageSec         = document.getElementById('usageSection');
const baseLicenseSec   = document.getElementById('baseLicenseSection');

const devAddOnsCheck   = document.getElementById('devAddOnsCheck');

// user-based
const userPdfSelect    = document.getElementById('userPdfSelect');
const userAutoSelect   = document.getElementById('userAutoSelect');
const userPublicAppsSelect = document.getElementById('userPublicAppsSelect');
const userFileStorageSelect= document.getElementById('userFileStorageSelect');
const userDbStorageSelect  = document.getElementById('userDbStorageSelect');

// usage-based
const usageTaskTierSelect  = document.getElementById('usageTaskTierSelect');
const usagePdfSelect       = document.getElementById('usagePdfSelect');
const usageAutoSelect      = document.getElementById('usageAutoSelect');
const usageFileStorageSelect= document.getElementById('usageFileStorageSelect');
const usageDbStorageSelect = document.getElementById('usageDbStorageSelect');
const usageDashboardSelect = document.getElementById('usageDashboardSelect');
const usagePublicAppsSelect= document.getElementById('usagePublicAppsSelect');

const numDevelopersInp     = document.getElementById('numDevelopers');
const numUsersInp          = document.getElementById('numUsers');
const usageMetricInp       = document.getElementById('usageMetric');
const baseLicenseAmt       = document.getElementById('baseLicenseAmount');

const regionSelect         = document.getElementById('regionSelect');
const psManDaysInp         = document.getElementById('psManDays');

const baseDiscountInp      = document.getElementById('baseDiscount');
const licDiscountInp       = document.getElementById('licDiscount');
const psDiscountInp        = document.getElementById('psDiscount');
const addonsDiscountInp    = document.getElementById('addonsDiscount');
const addonFlag = document.getElementById('addonFlag');
const priceOutput          = document.getElementById('priceOutput');

// We'll define all event listeners in init()
function init(){
   //alert("init");
  //buildDeveloperAddOns();
  // 1) We apply your constraint for deployment => model
  //    If Cloud => model in [User Based, Usage Based]
  //    If Self => model in [Developer Based, User Based, Usage Based]
  // We'll do that whenever deployment changes
  planSelect.addEventListener('change', onPlanModelDeployChange);
  deploySelect.addEventListener('change', onPlanModelDeployChange);
  modelSelect.addEventListener('change', onPlanModelDeployChange);
  addonFlag.addEventListener('change',addOnCheck);
  // discount + ps watchers
  psManDaysInp.addEventListener('input', calcPrice);
  regionSelect.addEventListener('change', calcPrice);
  baseDiscountInp.addEventListener('input', calcPrice);
  licDiscountInp.addEventListener('input', calcPrice);
  psDiscountInp.addEventListener('input', calcPrice);
  addonsDiscountInp.addEventListener('input', calcPrice);

  numDevelopersInp.addEventListener('input', calcPrice);
  numUsersInp.addEventListener('input', calcPrice); // user-based
  usageTaskTierSelect.addEventListener('change', calcPrice);

  usagePdfSelect.addEventListener('change', calcPrice);
  usageAutoSelect.addEventListener('change', calcPrice);
  usageFileStorageSelect.addEventListener('change', calcPrice);
  usageDbStorageSelect.addEventListener('change', calcPrice);
  usageDashboardSelect.addEventListener('change', calcPrice);
  usagePublicAppsSelect.addEventListener('change', calcPrice);
  userPdfSelect.addEventListener('change', calcPrice);
  userAutoSelect.addEventListener('change', calcPrice);
  userPublicAppsSelect.addEventListener('change', calcPrice);
  userFileStorageSelect.addEventListener('change', calcPrice);
  userDbStorageSelect.addEventListener('change', calcPrice);
  // We'll also build developer-based add-on checkboxes from pricingData
  buildDeveloperAddOns();

  // We'll forcibly rebuild the modelSelect so the constraint is applied from start
  rebuildModelOptions();
  onPlanModelDeployChange();
  buildUserAddOns(deploySelect.value);
  addOnCheck();
  calcPrice();
}

function addOnCheck()
{
  //console.log(modelSelect.value+", "+ deploySelect.value);
  const isChecked = addonFlag.checked;
  if(modelSelect.value === "userBased")
    buildUserAddOns(deploySelect.value);
  if(modelSelect.value === "usageBased")
    buildUsageAddOns(deploySelect.value,modelSelect.value);
  
  const subSections = document.getElementsByClassName('subSection');
   const displayValue = addonFlag.checked ? 'block' : 'none';
  for (let i = 0; i < subSections.length; i++) {
    subSections[i].style.display = displayValue;
  }
   if (!isChecked) {
    resetAllAddOns();          // Deselect all dropdowns + checkboxes
    calcPrice();    // Force re-calculate as $0
  }
  
}

// This function rebuilds modelSelect based on deployment

function rebuildModelOptions() {
  const deployVal = deploySelect.value;
  
  // Save the user's current model (e.g., "developerBased", "userBased", etc.)
  const oldModel = modelSelect.value;
  
  // Clear out the existing modelSelect options
  modelSelect.innerHTML = "";

  let arr = [];
  if (deployVal === "Cloud") {
    // Only userBased, usageBased
    arr = [
      { val: "userBased", text: "User Based" },
      { val: "usageBased", text: "Usage Based" }
    ];
  } else {
    // Self Host => developerBased, userBased, usageBased
    arr = [
      { val: "developerBased", text: "Developer Based" },
      { val: "userBased", text: "User Based" },
      { val: "usageBased", text: "Usage Based" }
    ];
  }

  // Rebuild the <option> elements
  arr.forEach(o => {
    const opt = document.createElement("option");
    opt.value = o.val;
    opt.textContent = o.text;
    modelSelect.appendChild(opt);
  });

  // Attempt to restore the old model if it still appears in the new array
  const newOptions = arr.map(x => x.val);
  if (newOptions.includes(oldModel)) {
    modelSelect.value = oldModel;
  } else {
    // oldModel no longer valid -> remain at the first array item
    // (which is automatically set by default, or we could do modelSelect.selectedIndex=0)
  }
}


// hide all sections
function hideAll(){
  developerSec.classList.add('hidden');
  userSec.classList.add('hidden');
  usageSec.classList.add('hidden');
  baseLicenseSec.classList.add('hidden');
}

function onPlanModelDeployChange(){
  // 1) We rebuild modelSelect if the deployment changed
  rebuildModelOptions();
  addOnCheck();
  // 2) read final
  const modelVal = modelSelect.value;
  const deployVal= deploySelect.value;
  let planVal = planSelect.value;

    resetAllAddOns();

  hideAll();

  if(modelVal==="developerBased"){
    developerSec.classList.remove('hidden');
  } else if(modelVal==="userBased"){
    userSec.classList.remove('hidden');
  } else {
    usageSec.classList.remove('hidden');
    buildUsageLicenseTiers(planVal);
  }

  if(deployVal==="Self Host"){
    baseLicenseSec.classList.remove('hidden');
  }
  


  calcPrice();
}

// builds the developer-based add-on checkboxes from JSON
function buildDeveloperAddOns(){
  
  let devObj = pricingData.addOns.developerBased;
 
  let html = "";
  for(let key in devObj){
    html += `<label id="devAddOns"><input type="checkbox" class="devAddonCheck" value="${key}" /> ${key} = \$${devObj[key]} </label><br/>`;
  }
  devAddOnsCheck.innerHTML = html;
  console.log(devObj);

  // add listeners
  document.querySelectorAll('.devAddonCheck').forEach(chk=>{
    chk.addEventListener('change', calcPrice);
  });
  
}

// main calc function
function calcPrice(){
  // We'll do a partial example, focusing on the layout
  // 1) We'll do two major sections: License & One-off
  //    License => base license, user/dev or usage licensing, add-ons
  //    One-off => professional services
  // Then each section has a sub-total
//alert("new change")
  let licenseSubtotal = 0;
  let oneOffSubtotal  = 0;
   //alert("ok");
  // e.g. let's say base license is read from JSON
  // let's read plan, model, deploy, etc. from the UI
  let planVal   = planSelect.value;
  let deployVal = deploySelect.value;
  let modelVal  = modelSelect.value;
  
  // find base license from JSON
  let baseLicenseVal = getBaseLicense(modelVal, planVal, deployVal);
  // apply base discount
  let baseDiscPct = parseFloat(baseDiscountInp.value)||0;
  let baseDiscAmt = baseLicenseVal*(baseDiscPct/100);
  let baseLicenseAfter = baseLicenseVal - baseDiscAmt;

   //let licensingCost=0;
  //console.log("here");
  // add that to licenseSubtotal
  licenseSubtotal += baseLicenseAfter;

  // licensing cost => placeholder
  let licensingCost = 0;
  if(modelVal==="developerBased"){
    let devCount = parseInt(numDevelopersInp.value,10)||0;
    licensingCost = getDeveloperLicensingCost(planVal, deployVal, devCount);
  }
  if (modelVal === "userBased") {
  const userCount = parseInt(numUsersInp.value, 10) || 0;
  licensingCost = getUserLicensingCost(planVal, deployVal, userCount);
}
  if (modelVal === "usageBased") {
  const tierKey = usageTaskTierSelect.value; // e.g., "500k", "1mn"
  const tierList = pricingData.licensingTiers.usageBased[planVal];

  const matchedTier = tierList?.find(t => t.tierKey === tierKey);

  if (matchedTier) {
    const yearlyCost = matchedTier.monthly * 12;
    licensingCost = yearlyCost;

    // If usageMetricInp is meant to show the cost, update it:
    if (usageMetricInp) {
      usageMetricInp.value = `$${yearlyCost}`;
    }
  }
}

  
  let licDiscPct = parseFloat(licDiscountInp.value)||0;
  let licDiscAmt = licensingCost*(licDiscPct/100);
  let licensingAfter= licensingCost-licDiscAmt;
  licenseSubtotal += licensingAfter;

  // add-ons => placeholder
  let addOnsCost = 0;
  let addonsDiscPct = parseFloat(addonsDiscountInp.value)||0;
  let addonsDiscAmt = addOnsCost*(addonsDiscPct/100);
  let addonsAfter = addOnsCost-addonsDiscAmt;
  licenseSubtotal += addonsAfter;

  // professional services => one-off
  let regionVal = regionSelect.value.trim().toLowerCase();
  let dailyRate = (regionVal==="india")? pricingData.professionalServices.rateIndia : pricingData.professionalServices.rateOutside;
  let manDays = parseInt(psManDaysInp.value,10)||0;
  let psCost  = dailyRate*manDays;

  let psDiscPct = parseFloat(psDiscountInp.value)||0;
  let psDiscAmt = psCost*(psDiscPct/100);
  let psAfter   = psCost-psDiscAmt;

  oneOffSubtotal += psAfter;

  // now build the summary
  let html=`
    <h3>License</h3>
    <div>Base License: \$${baseLicenseVal} minus discount = \$${baseLicenseAfter}</div>
    <div>Licensing: \$${licensingCost} minus discount = \$${licensingAfter}</div>
    <div id='addons'>Add-ons: \$${addOnsCost} minus discount = \$${addonsAfter}</div>
    <strong id="subtotal">License Subtotal: \$${licenseSubtotal}</strong>

    <hr/>
    <h3>One-off</h3>
    <div>Professional Services: \$${psCost} minus discount = \$${psAfter}</div>
    <strong>One-off Subtotal: \$${oneOffSubtotal}</strong>

    <hr/>
    <h3>Total</h3><div id="total">
    \$${licenseSubtotal + oneOffSubtotal}</div>
  `;
  
  priceOutput.innerHTML = html;
   addonsAfter = calculateAddOnsTotal();
licenseSubtotal += addonsAfter;
  document.getElementById("subtotal").innerHTML="License Subtotal: " + licenseSubtotal+"$";
  
  document.getElementById("total").innerHTML= "$"+(oneOffSubtotal+licenseSubtotal);
}

function resetAllAddOns() {
  // Clear user-based selects
  [userPdfSelect, userAutoSelect, userPublicAppsSelect, userFileStorageSelect, userDbStorageSelect].forEach(select => {
    if (select) select.selectedIndex = 0;
  });

  // Clear usage-based selects
  [usagePdfSelect, usageAutoSelect, usagePublicAppsSelect, usageFileStorageSelect, usageDbStorageSelect, usageDashboardSelect].forEach(select => {
    if (select) select.selectedIndex = 0;
  });

  // Uncheck all developer-based checkboxes
  const devCheckboxes = document.querySelectorAll(".devAddonCheck");
  devCheckboxes.forEach(chk => chk.checked = false);

  // Optional: Clear usage tier selection
  if (usageTaskTierSelect) usageTaskTierSelect.selectedIndex = 0;

  // Optional: Clear usage metric display field
  if (usageMetricInp) usageMetricInp.value = "";
}


function calculateAddOnsTotal() {
  let total = 0;
  const discountPc = parseFloat(document.getElementById("addonsDiscount").value) || 0;
  const deployVal = deploySelect.value;
  const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Handle select-based add-ons
  const allAddonSelects = [
    { elem: userPdfSelect,        model: "User Based", addon: "PDF" },
    { elem: userAutoSelect,       model: "User Based", addon: "Automation" },
    { elem: userPublicAppsSelect, model: "User Based", addon: "Public Apps" },
    { elem: userFileStorageSelect,model: "User Based", addon: "File Storage" },
    { elem: userDbStorageSelect,  model: "User Based", addon: "DB Storage" },

    { elem: usagePdfSelect,        model: "Usage Based", addon: "PDF" },
    { elem: usageAutoSelect,       model: "Usage Based", addon: "Automation" },
    { elem: usagePublicAppsSelect, model: "Usage Based", addon: "Public Apps" },
    { elem: usageFileStorageSelect,model: "Usage Based", addon: "File Storage" },
    { elem: usageDbStorageSelect,  model: "Usage Based", addon: "DB Storage" },
    { elem: usageDashboardSelect,  model: "Usage Based", addon: "Dashboard" }
  ];

  allAddonSelects.forEach(({ elem, model, addon }) => {
    const selectedTier = elem?.value;
    if (!selectedTier || selectedTier === "") return;

    const match = pricingData.addOnsFlat.find(item =>
      normalize(item.deployment) === normalize(deployVal) &&
      normalize(item.model) === normalize(model) &&
      normalize(item.addon) === normalize(addon) &&
      normalize(item.qty) === normalize(selectedTier)
    );

    if (match && match.price_per_year) {
      total += match.price_per_year;
    }
  });

  // Handle developer checkboxes (map value => addon + qty)
const devCheckboxes = document.querySelectorAll(".devAddonCheck:checked");
devCheckboxes.forEach(checkbox => {
  const rawVal = checkbox.value; // e.g., "unlimitedPdf"
  const deployVal = deploySelect.value;

  // Extract addon type and qty from value (e.g., "unlimitedPdf" => "PDF" + "Unlimited")
  const qtyMatch = rawVal.match(/^unlimited/i);
  const qty = qtyMatch ? "Unlimited" : "";
  const addon = rawVal.replace(/^unlimited/i, '').replace(/([a-z])([A-Z])/g, '$1 $2'); // "Pdf" => "PDF"

  const match = pricingData.addOnsFlat.find(item =>
    normalize(item.deployment) === normalize(deployVal) &&
    normalize(item.model) === normalize("Developer") &&
    normalize(item.addon) === normalize(addon) &&
    normalize(item.qty) === normalize(qty)
  );

  if (match && match.price_per_year) {
    total += match.price_per_year;
  }
});

  // Apply discount
  const discountAmount = (discountPc / 100) * total;
  const discounted = total - discountAmount;

  // Update the DOM
  const addonsDiv = document.getElementById("addons");
if (addonsDiv) {
  addonsDiv.innerHTML = `Add-ons: $${total.toFixed(2)} minus discount (${discountPc}%) = $${discounted.toFixed(2)}`;
}

  
  /*document.getElementById("addons").innerHTML =
    `Add-ons: $${total.toFixed(2)} minus discount (${discountPc}%) = $${discounted.toFixed(2)}`;*/
  return discounted;
  
}




// read base license from JSON
function getBaseLicense(model, plan, deploy){
  // e.g. pricingData.baseLicense.developerBased.Enterprise["Self Host"]
  const bObj = pricingData.baseLicense[model];
  if(!bObj) return 0;
  const planObj = bObj[plan];
  if(!planObj) return 0;
  return planObj[deploy] || 0;
  //
}

function getDeveloperLicensingCost(plan, deploy, devCount){
  // e.g. licensingTiers.developerBased[plan][deploy]
  let tierObj = pricingData.licensingTiers.developerBased[plan][deploy];
  if(!tierObj) return 0; // means developer in Cloud => 0 or ignore

  // e.g. {
  //  baseDev:5, tier1Range:[6,10], tier1Price:3500,
  //  tier2Range:[11,100], tier2Price:2500, tier3Price:1500
  // }
  let baseDev = tierObj.baseDev;
  let devExtra = devCount - baseDev;
  if(devExtra<=0) return 0;

  let totalLic=0;
  // for simplicity, if devCount <= tier1Range[1], then the cost is devExtra * tier1Price if devCount >= tier1Range[0]. Then tier2, etc.
  // We'll do a step approach.

  // Tier1
  if(tierObj.tier1Range){
    let [t1Start, t1End] = tierObj.tier1Range; // e.g. [6,10]
    // if devCount >= t1Start => some devs in tier1
    if(devCount >= t1Start){
      let endVal = Math.min(devCount, t1End);
      let countInTier = endVal - (t1Start-1);
      totalLic += countInTier * tierObj.tier1Price;
    }
  }

  // Tier2
  if(tierObj.tier2Range){
    let [t2Start, t2End] = tierObj.tier2Range;
    if(devCount >= t2Start){
      let endVal = (t2End==null)? devCount : Math.min(devCount, t2End);
      let countInTier = endVal - (t2Start-1);
      if(countInTier<0) countInTier=0;
      totalLic += countInTier * tierObj.tier2Price;
    }
  }

  // Tier3 => anything above tier2Range[1]
  if(tierObj.tier2Range && tierObj.tier2Range[1]){
    let t2max = tierObj.tier2Range[1];
    if(devCount> t2max){
      let inT3 = devCount - t2max;
      totalLic += inT3 * tierObj.tier3Price;
    }
  }

  return totalLic;
}

function getUserLicensingCost(plan, deploy, userCount) {
  // Grab the array from the JSON
  const tierArray = pricingData.licensingTiers.userBased[plan]?.[deploy];
  if (!tierArray) {
    // means either plan or deploy not found in userBased
    return 0;
  }

  // Find the first tier whose maxUsers >= userCount or maxUsers===null
  let chosenMonthlyRate = 0;
  for (let i = 0; i < tierArray.length; i++) {
    const tierObj = tierArray[i];
    // if maxUsers is null => unlimited bracket
    if (tierObj.maxUsers === null || userCount <= tierObj.maxUsers) {
      chosenMonthlyRate = tierObj.monthlyRate;
      break;
    }
  }

  // The total licensing cost: monthlyRate * userCount * 12
  return chosenMonthlyRate * userCount * 12;
}

//default addon select an option function

function addDefaultOption(selectElement) {
  const defaultOpt = document.createElement("option");
  defaultOpt.textContent = "Select an option";
  defaultOpt.disabled = false;
  defaultOpt.selected = true;
  defaultOpt.value = "";
  selectElement.appendChild(defaultOpt);
}

//build user add ons

function buildUserAddOns(deployVal) {
  //console.log(JSON.stringify(pricingData.addOns.userBased));

  const userAddOnData = pricingData.addOns.userBased; 
  // userAddOnData = { pdf: [...], automation: [...], publicApps: [...], fileStorage: [...], dbStorage: [...] }

  // Helper to add default option
  function addDefaultOption(selectElement) {
    const defaultOpt = document.createElement("option");
    defaultOpt.textContent = "Select an option";
    defaultOpt.disabled = false;
    defaultOpt.selected = true;
    defaultOpt.value = "";
    selectElement.appendChild(defaultOpt);
  }

  // 1) PDF
  userPdfSelect.innerHTML = "";
  addDefaultOption(userPdfSelect);
  userAddOnData.pdf.forEach(item => {
    if (deployVal === "Cloud" && item.tier === "unlimited") {
      return; // skip
    }//
    const opt = document.createElement("option");
    opt.value = item.tier; 
    opt.textContent = `${item.tier} => $${item.annualCost} /year`;
    userPdfSelect.appendChild(opt);
  });

  // 2) Automation
  userAutoSelect.innerHTML = "";
  addDefaultOption(userAutoSelect);
  userAddOnData.automation.forEach(item => {
    if (deployVal === "Cloud" && item.tier === "unlimited") {
      return;
    }
    const opt = document.createElement("option");
    opt.value = item.tier;
    opt.textContent = `${item.tier} => $${item.annualCost} /year`;
    userAutoSelect.appendChild(opt);
  });

  // 3) Public Apps
  userPublicAppsSelect.innerHTML = "";
  addDefaultOption(userPublicAppsSelect);
  userAddOnData.publicApps.forEach(item => {
    if (deployVal === "Cloud" && item.tier === "unlimited") {
      return;
    }
    const opt = document.createElement("option");
    opt.value = item.tier;
    opt.textContent = `${item.tier} => $${item.annualCost} /year`;
    userPublicAppsSelect.appendChild(opt);
  });

  // 4) File Storage
  userFileStorageSelect.innerHTML = "";
  addDefaultOption(userFileStorageSelect);
  userAddOnData.fileStorage.forEach(item => {
    if (deployVal === "Cloud" && item.tier === "unlimited") {
      return;
    }
    const opt = document.createElement("option");
    opt.value = item.tier;
    opt.textContent = `${item.tier} => $${item.annualCost} /year`;
    userFileStorageSelect.appendChild(opt);
  });

  // 5) DB Storage
  userDbStorageSelect.innerHTML = "";
  addDefaultOption(userDbStorageSelect);
  userAddOnData.dbStorage.forEach(item => {
    if (deployVal === "Cloud" && item.tier === "unlimited") {
      return;
    }
    const opt = document.createElement("option");
    opt.value = item.tier;
    opt.textContent = `${item.tier} => $${item.annualCost} /year`;
    userDbStorageSelect.appendChild(opt);
  });
}


// usage based model add-ons building is below:

function buildUsageAddOns(deployVal, modelVal) {
  // Mapping of add-on names to the IDs of their select elements
  const addonMapping = {
    "PDF": "usagePdfSelect",
    "Automation": "usageAutoSelect",
    "File Storage": "usageFileStorageSelect",
    "DB Storage": "usageDbStorageSelect",
    "Dashboard": "usageDashboardSelect",
    "Public Apps": "usagePublicAppsSelect"
  };
const normalize = str => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Loop through each add-on type in the mapping
  for (const addonType in addonMapping) {
    // Get the select element by its ID
    const selectId = addonMapping[addonType];
    const selectElem = document.getElementById(selectId);
    //console.log(document.getElementById(selectId));
    // Clear any existing options
    selectElem.innerHTML = "";

    // Filter the JSON records based on deployment, model, and addon type (case-insensitive)
    /*const filteredItems = pricingData.addOnsFlat.filter(item => {
      return item.deployment.toLowerCase() === deployVal.toLowerCase() &&
             item.model.toLowerCase() === modelVal.toLowerCase() &&
             item.addon.toLowerCase() === addonType.toLowerCase();
    });*/
    
    const filteredItems = pricingData.addOnsFlat.filter(item => {
  return normalize(item.deployment) === normalize(deployVal) &&
         normalize(item.model) === normalize(modelVal) &&
         normalize(item.addon) === normalize(addonType);
});

    // If no matching add-ons are found, handle accordingly:
    if (filteredItems.length === 0) {
       console.warn("No match for:", {
    deployment: deployVal,
    model: modelVal,
    addon: addonType
  });
      const option = document.createElement("option");
      // For Dashboard, we assume a default activation option
      if (addonType === "Dashboard") {
        option.textContent = "Default (Activation)";
        option.value = "default";
      } else {
        option.textContent = "No Options Available";
        option.value = "";
      }
      selectElem.appendChild(option);
      continue;
    }
    
    const defaultOption = document.createElement("option");
defaultOption.textContent = "Select an option";
defaultOption.disabled = false;       // Prevent user from re-selecting it once changed
defaultOption.selected = true;       // Show this as default selected
defaultOption.value = "";            // Value is empty or null-equivalent
selectElem.appendChild(defaultOption);

    // For each matching item, create an option element
    filteredItems.forEach(item => {
      const option = document.createElement("option");
      // Construct the display text; for example: "Unlimited ($15000/year)"
      let text = `${item.qty}`;
      if (item.price_per_year !== null) {
        text += ` ($${item.price_per_year}/year)`;
      }
      option.textContent = text;
      // You can set the option value to the tier or another identifier
      option.value = item.qty;
      // If notes are provided, add them as a tooltip
      if (item.notes && item.notes.trim() !== "") {
        option.title = item.notes;
      }
      selectElem.appendChild(option);
    });
  }
}

function buildUsageLicenseTiers(planVal) {
  usageTaskTierSelect.innerHTML = "";
  const tierList = pricingData.licensingTiers.usageBased[planVal];
  if (!tierList) return;

  const defaultOpt = document.createElement("option");
  defaultOpt.textContent = "Select a tier";
  defaultOpt.disabled = false;
  defaultOpt.selected = true;
  defaultOpt.value = "";
  usageTaskTierSelect.appendChild(defaultOpt);

  tierList.forEach(tier => {
    const opt = document.createElement("option");
    opt.value = tier.tierKey;
    opt.textContent = `${tier.tierKey} — $${tier.monthly}/mo`;
    usageTaskTierSelect.appendChild(opt);
  });
}


// when page loads
document.addEventListener('DOMContentLoaded', init);
