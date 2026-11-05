
import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

// =====================================
// GOOGLE DRIVE IMAGES
// Accepts both full Drive URLs and raw File IDs!
// =====================================

const rawDriveInputs = [
  "1wi3eeRLvnqNdszza2P5nSaqxmPEL4c5a",
  "1X9DweviGe4NuCHrAhcG0m2iDxRe35ap9",
  "1Mu2A1w7NV2mR-6tRwYMS4YSAhBdhFQZs",
  "1xjD32QLM_LDQDlpA75ZYAroNLrcSc-wc",
  "1i6duo38xACXGbguMOWvVtyH42WIurX2X",
  "1V6qV17eOYB8JR0-KfAMeIsieNgYK9FyZ",
  "1i8vVMdOhYI_B5mkB4WI5KeNoY5ggblQR",
  "1KJxhYAnOTnOXL9f9NhUCE9F9nCT-QAYt",
  "1RJ20DBi8dJTwhZexVNpz509p26ub4Cwz",
  "1T5PUnOHE_g_sJDxbOytrr_qr9zTmlQ9-",
  "1PMW_UiV16DS5_MakG5_9XkMNl-403EHX",
  "1YixFSHZziUo98d_p0ayYhhYDu6JgD3P1",
  "1LiXtNL3RSOnCKn8Zv-PcTDInhr8lMvXv",
  "1TY7ft1KG1WQFKQzcod6_81Iak8j9Y-NL",
  "1nSJm3ifZD5ILJNWvNzLl6inIPiTvuyUf",
  "1SjcFJiXDbGudmVm44ruUr4Dn67jDYKJ8",
  "https://drive.google.com/file/d/1gv4lBmWHaTghwRivXmdpM8IAN1o7lbDv/view?usp=drive_link",
  "https://drive.google.com/file/d/1lxPOrWYj32WPG_U4AKAZkAQsZqulOcIG/view?usp=drive_link",
  "https://drive.google.com/file/d/1E7kd0GNSQpQAjKs4pLXSgYVqTOUjiONS/view?usp=drive_link",
  "https://drive.google.com/file/d/18fM7AZIQHrGD42zpK9QlhKsAXLUdhJfC/view?usp=drive_link",
  "https://drive.google.com/file/d/1DaMdyRaWQ-8xZBxHa5yohqRSXoKa3Ykn/view?usp=drive_link",
  "https://drive.google.com/file/d/1_OKV247pAAsqBMryFKTUYqlxipbVLDSQ/view?usp=drive_link",
  "https://drive.google.com/file/d/1IUPbZk7a7uu7Cr-9jm2eeBQHfGcBBNj0/view?usp=drive_link",
  "https://drive.google.com/file/d/1GuK-NeW9YxhQ-m_tCchiTZd6IvwAQsfR/view?usp=drive_link",
  "https://drive.google.com/file/d/1C38ZXVDb4nDz51NYQS40KMrhCBZo21PF/view?usp=drive_link",
  "https://drive.google.com/file/d/1jtZZiU-hS2wi0V26NkP1jyWuFrYV70-A/view?usp=drive_link",
  "https://drive.google.com/file/d/1VvZQ4AAvpEu8lianxLDluWip6oKAz1nN/view?usp=drive_link",
  "https://drive.google.com/file/d/1LRgVgmeE62hHp-PXFfvJajyBM96XLqew/view?usp=drive_link",
  "https://drive.google.com/file/d/1ePJ5pcETdH1JVtLu4XIcGjMsckNkZSgn/view?usp=drive_link",
  "https://drive.google.com/file/d/13nSOA9eL3lMGg6pIA4lZBylXqdr2VDMu/view?usp=drive_link",
  "https://drive.google.com/file/d/1ilvDiI2JduqMOTuveu0ICmX2TtHnHTCV/view?usp=drive_link",
  "https://drive.google.com/file/d/1qL3BdL5lfyYNHGbnk8m_l8BcBJjq67Aq/view?usp=drive_link",
  "https://drive.google.com/file/d/1CL9dX4Hp539K5dn9_EFigbYsBU2kGx2F/view?usp=drive_link",
  "https://drive.google.com/file/d/1gjyu0_hGr9hHlAql4LhRwO1XNlUORMLM/view?usp=drive_link",
  "https://drive.google.com/file/d/1EsrQzgWCLAsSrMOlAbzYMOjfEmMMZxLm/view?usp=drive_link",
  "https://drive.google.com/file/d/1DeYnZxH-4L3PQlML2dmG7yDh76KVzF0g/view?usp=drive_link",
  "https://drive.google.com/file/d/1gcHInzzhBg3gisB3Su2XBZWxp0gLBONF/view?usp=drive_link",
  "https://drive.google.com/file/d/1ruMU0YrLBsDS7-2CSBUeZllTcuws0B4p/view?usp=drive_link",
  "https://drive.google.com/file/d/1E3xLES4ZMOXXZL_SjoF9sHmIbuM2a8rM/view?usp=drive_link",
  "https://drive.google.com/file/d/1hR40UMoP5ziP6CG-UMNTe_iPSaAj53e7/view?usp=drive_link",
  "https://drive.google.com/file/d/1K4hnW3EA4TXEXcPO3U8qlPUUXg-XJAKi/view?usp=drive_link",
  "https://drive.google.com/file/d/1KQjdQ6DJkW4NAod4Ca71YC3PfQ2DHMJl/view?usp=drive_link",
  "https://drive.google.com/file/d/1B1XqtJdtT4fnF02bR4pneLrEv5aal-sF/view?usp=drive_link",
  "https://drive.google.com/file/d/1OVClZ5qwUblJJxrAkwEzc0ZCBnBHj-LM/view?usp=drive_link",
  "https://drive.google.com/file/d/1N_Whc31uRPjk6zFVj15gUDQ54GtRRq98/view?usp=drive_link",
  "https://drive.google.com/file/d/1rCFWG6iBxXcgO01DlUPsiwD7UDEaU90Q/view?usp=drive_link",
  "https://drive.google.com/file/d/1pUsD3FCahMDWCR7Amsim6JV4P6zm_e4e/view?usp=drive_link",
  "https://drive.google.com/file/d/10IDDF1O4MDA_qXo0pSxgo6k4Ig1j1YXa/view?usp=drive_link",
  "https://drive.google.com/file/d/1Z9Eoc7uB99n9sOujooDIejtmm0c9y_NH/view?usp=drive_link",
  "https://drive.google.com/file/d/1Ny-hg0RPEIYE8nKOFWnb4zPpeCLNBHHR/view?usp=drive_link",
  "https://drive.google.com/file/d/1SHTxogWJ46HTXCErYPY5E8tEGuug0MyA/view?usp=drive_link",
  "https://drive.google.com/file/d/1RYf0IoOtVNMwVPo15eNszTxIcfGHqrGZ/view?usp=drive_link",
  "https://drive.google.com/file/d/15dknt-FYwSR3gCBcQQY8kPg4EOz6hjat/view?usp=drive_link",
  "https://drive.google.com/file/d/1ann9Boq2Dh2rYWACNOeO2I_5z_4F2GWq/view?usp=drive_link",
  "https://drive.google.com/file/d/1bzlE5sLLhB5wr9zYBhFKUQ-mr_Ftl1Gu/view?usp=drive_link",
  "https://drive.google.com/file/d/1_Sbwtg7y1P72cev3CogShq5Rs_E8eA7u/view?usp=drive_link",
  "https://drive.google.com/file/d/1AFEfGcSN5M84oxElFimfIOPfoskWM1YP/view?usp=drive_link",
  "https://drive.google.com/file/d/1Thsk6XAT0mXz-P4ginURxCMmEARmqUj3/view?usp=drive_link",
  "https://drive.google.com/file/d/16fJhPEBx0YiP-LC3Nll6M_XxQkmg64wP/view?usp=drive_link",
  "https://drive.google.com/file/d/17U4YRu82YW61MoV4D7oG7RrXYHAzIbOe/view?usp=drive_link",
  "https://drive.google.com/file/d/1Vco-lswuE30IQp_n4iGwB_O7gf3APV7T/view?usp=drive_link",
  "https://drive.google.com/file/d/1v9F6I3ploi5DT47AbIba3oFVl8x0w0BW/view?usp=drive_link",
  "https://drive.google.com/file/d/1WwYid0ylyAKeRFM6K0vA-eCZSCbyQVl3/view?usp=drive_link",
  "https://drive.google.com/file/d/1HKt2ZPn6d8FL1EBQYSll1R12a1sKmOkQ/view?usp=drive_link",
  "https://drive.google.com/file/d/1EDpB-xXcNbfLTxOBJyZoJ5hPd11AIPtD/view?usp=drive_link",
  "https://drive.google.com/file/d/12W7OZGV_Sn22doru1E3LXbK4r3QHzo5f/view?usp=drive_link",
  "https://drive.google.com/file/d/1LtLOKj8fQV8_p9x0WBoNhZx7lLx9UDOG/view?usp=drive_link",
  "https://drive.google.com/file/d/1_SI2hNyETcCci5gTs7-bDKZv2Vs_hfsZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1Q7N2kQpzAvwdUqyIoqygWGIhSthQWKjv/view?usp=drive_link",
  "https://drive.google.com/file/d/1_Y3S_s_cdAVoS6O-Gkazj8W3H7JPXzaK/view?usp=drive_link",
  "https://drive.google.com/file/d/1-luX1V-YM7n3fwYCWTRaZrYIeFoHVuqK/view?usp=drive_link",
  "https://drive.google.com/file/d/19QhaTpT1BNUB3oEMXjWcpIA-zufspcih/view?usp=drive_link",
  "https://drive.google.com/file/d/1Y7F8UrfB8LuRYUvLMLSmsGZ--1ehhmmx/view?usp=drive_link",
  "https://drive.google.com/file/d/1VWJORolJZNLo3jqRcqFkHzbu84ztPhf3/view?usp=drive_link",
  "https://drive.google.com/file/d/1Y7F8UrfB8LuRYUvLMLSmsGZ--1ehhmmx/view?usp=drive_link",
  "https://drive.google.com/file/d/1AyWscaENBaH8ZrHWWkbfUfWD8yVepLH-/view?usp=drive_link",
  "https://drive.google.com/file/d/1vQWnuy-Zt6xTgo7eRizsA8LtVc5pCMuU/view?usp=drive_link",
  "https://drive.google.com/file/d/1dVWtBkV2aKdti3iv5JcxQY9TkuHj4rNm/view?usp=drive_link",
  "https://drive.google.com/file/d/1Sq8XPfY71WpHmUUt312roq0xNk6JTwtD/view?usp=drive_link",
  "https://drive.google.com/file/d/1ghKm_wjhFzb3972MzNCwpBGaD3NkaD0o/view?usp=drive_link",
  "https://drive.google.com/file/d/1GvN8Z2Jfv14SAU7nA8zsKOOVUrDKLC7m/view?usp=drive_link",
  "https://drive.google.com/file/d/1vysuPpghP0cW4qhIikDZTsVSb_dRBuJW/view?usp=drive_link",
  "https://drive.google.com/file/d/12kjYhMAP7lzS9IMdzwbBtoiPrwu_cPJM/view?usp=drive_link",
  "https://drive.google.com/file/d/1ggaVjQHf5sRYp91vYO8NgJ4bvaFhAQ5u/view?usp=drive_link",
  "https://drive.google.com/file/d/1ksBJcr8W9VD80ih0xZdUFWZdS9bVsAmD/view?usp=drive_link",
  "https://drive.google.com/file/d/1BAxdJxHxr1odPzAXZfWqNePXodiR3XRi/view?usp=drive_link",
  "https://drive.google.com/file/d/1j6HR9iPk6cyvQ2bwcafgmYwoxmhjU1LR/view?usp=drive_link",
  "https://drive.google.com/file/d/18WwXlOveVtJg2jtoY3e_HbIwvyHSWy6Y/view?usp=drive_link",
  "https://drive.google.com/file/d/1WWQA2eWr8UXLNgU53X1QbsZ5q8POtRUD/view?usp=drive_link",
  "https://drive.google.com/file/d/1ZoUKHkEi4-LvTAKBWL6dOaEtXrCMk_TZ/view?usp=drive_link",
  "https://drive.google.com/file/d/1E8dhTuMMTMZ3xnc6qh3OWE4yDRm6w_4d/view?usp=drive_link",
  "https://drive.google.com/file/d/1m_SI5XAGI88jMmloFH8QDYJoIFZULbyA/view?usp=drive_link",
  "https://drive.google.com/file/d/1py42CyQSH51etFIDkOyiVRA0WMIVg9gj/view?usp=drive_link",
  "https://drive.google.com/file/d/1vpWHD49yb9dvCI7KHoZ1Ie4JcHBGjIaM/view?usp=drive_link",
  "https://drive.google.com/file/d/19wVqYVOm0xb4kY6IiQqh73VSaKPx14I8/view?usp=drive_link",
  "https://drive.google.com/file/d/1ZANSLez3JTFcAvnBlhrLeWeVRbTGUW7O/view?usp=drive_link",
  "https://drive.google.com/file/d/1Jm894uAFrvg3dGicmDyIrzj7bbK0ld-5/view?usp=drive_link",
  "https://drive.google.com/file/d/1O8wbsDFj21NlOqyCPUgJPPHmY5gSk5w0/view?usp=drive_link",
  "https://drive.google.com/file/d/1IoWmYR-kC42zDC9bLJiwFSeof6Uob_7w/view?usp=drive_link",
  "https://drive.google.com/file/d/1a7pNfRc6h9b2gE9ztikzyjY0qCM4BtFO/view?usp=drive_link",
  "https://drive.google.com/file/d/10-5_sQlVhfirp_iXig8GED7tLEW8PX6V/view?usp=drive_link",
  "https://drive.google.com/file/d/18LMZOqwnG1WTh9-rZ6RliYkotkEO1d2H/view?usp=drive_link",
  "https://drive.google.com/file/d/1a0dknbFA86mqeHcSrV5pySJBzH3IaAgE/view?usp=drive_link",
  "https://drive.google.com/file/d/135dqXW5Gg1iRAN5zYr2bUMvvcgF-UcZj/view?usp=drive_link",
  "https://drive.google.com/file/d/1cj9lEzjrMeu23W-rRd1UrqfO0ULnooNi/view?usp=drive_link",
  "https://drive.google.com/file/d/1qUhNEj39GBFX7OCtMl7PgGrLTOKbaUWX/view?usp=drive_link",
  "https://drive.google.com/file/d/1Hc-1vHrhsXKyAJcLKnYjqWPebKpw1pU6/view?usp=drive_link",
  "https://drive.google.com/file/d/13Kss4DQBIWDXOZGT5Hf1d8WcBCQsEC93/view?usp=drive_link",
  "https://drive.google.com/file/d/11w-ioncnHX892Ubv9KLnnXIszZYPGfC5/view?usp=drive_link",
  "https://drive.google.com/file/d/1wN1l32DqHKE7F_QGz9AHJ4L_VeOgrAQM/view?usp=drive_link",
  "https://drive.google.com/file/d/1yLEjsA-Tb35ILduHbV7P-SRvl42VBT7L/view?usp=drive_link",
  "https://drive.google.com/file/d/18PU_7CBAL4dJKyvp-vDuQjmhWMvJqg6a/view?usp=drive_link",
  "https://drive.google.com/file/d/1HeeOYqC3CrScWD34lFRu593evI1xz6UW/view?usp=drive_link",
  "https://drive.google.com/file/d/1FdZLVOQwmwo0SkUS9YAW6hgzhcn1CUG_/view?usp=drive_link",
  "https://drive.google.com/file/d/1pLMI_UCvwh4-gQEBRShXhvhKrsmwpFuW/view?usp=drive_link",
  "https://drive.google.com/file/d/1r7S0dPTeYpHnf12meD5ang03oaVWItnf/view?usp=drive_link",
  "https://drive.google.com/file/d/1oe5Dai-Lq85dXJSPPV8UBbpti1AIc0Xa/view?usp=drive_link",
  "https://drive.google.com/file/d/1FzDesYvYDXcKAHkG5wlcx7TTCNsHQxhH/view?usp=drive_link",
  "https://drive.google.com/file/d/1RLPm5vP2ENxKlKShl5WFRnSIfxv3OiH0/view?usp=drive_link",
  "https://drive.google.com/file/d/1TNktrpOQtP5VJUd5LPxoxi5LRQqY5Cy9/view?usp=drive_link",
  "https://drive.google.com/file/d/1lUpDtNsU9jOuvkfcQ_C0azoIb9BO4WX6/view?usp=drive_link",
  "https://drive.google.com/file/d/1In4hqbrqZLWqle-zAlbDTQlob26NHjMA/view?usp=drive_link",
  "https://drive.google.com/file/d/1-YNsWCfR2l19VWgYzQJsW_jWC1Y0PnGO/view?usp=drive_link",
  "https://drive.google.com/file/d/1V2U0vSuX_2HqC1HfYnCfeXBXtfr9NRnm/view?usp=drive_link",
  "https://drive.google.com/file/d/1vmO1dL7Ya_qx-hg9RNlCW-NJDeY8pW4_/view?usp=drive_link",
  "https://drive.google.com/file/d/1yMPYDxA08hC5jkLsHTX4byLFADsBgSap/view?usp=drive_link",
  "https://drive.google.com/file/d/1RZwqQwixE4jiO6ExXQltsVbZXcyPQCTU/view?usp=drive_link",
  "https://drive.google.com/file/d/10mUegwNyPW0Yqdruu7aX0PTcWZdBHpPR/view?usp=drive_link",
  "https://drive.google.com/file/d/1a9hDbs7A-FBIkVzrJe5j0yTQZyTRf8v2/view?usp=drive_link",
  "https://drive.google.com/file/d/1LdgKgOhsHl3xdeb3Rphu5od5-VVInUSk/view?usp=drive_link",
  "https://drive.google.com/file/d/100i_n8_cR8VKAHmURmAzNA6RPea4-mGc/view?usp=drive_link",
  "https://drive.google.com/file/d/150ukkQh4mqHZ58ThJd2a7iSjxave8gWA/view?usp=drive_link",
  "https://drive.google.com/file/d/1OMjT7gBpp0wC-RvJ5asM-eqTMX7my6fN/view?usp=drive_link",
  "https://drive.google.com/file/d/1H2Es_hQnJlZrtXNf-NiPezGigqauMiF5/view?usp=drive_link",
  "https://drive.google.com/file/d/11rVa411MLPFCNNnUFkr0KsAJeI17jvFR/view?usp=drive_link",
  "https://drive.google.com/file/d/1-d00wSzY5RxfWTlJ449BEdL8T1bRM_l4/view?usp=drive_link",
  "https://drive.google.com/file/d/1mPQjIK91XB3s_iRlZfeBW1dZLc7_eDwd/view?usp=drive_link",
  "https://drive.google.com/file/d/1FuMKkuFUlggc58nfYyXx4Q-8ZFqv7CEd/view?usp=drive_link",
  "https://drive.google.com/file/d/1Y5weizj4z7sjFWxD3opx5Oy2aLCHsjgV/view?usp=drive_link",
  "https://drive.google.com/file/d/1b7FnZ2T7nhHliSy7szO7882p90_0g0JS/view?usp=drive_link",
  "https://drive.google.com/file/d/1gvXrdt-0Juk_9Tk5eigOC-j_IkfmL_Vg/view?usp=drive_link",
  "https://drive.google.com/file/d/1K79MwlSdtM__vS0ZMvCFZkm0uGedZkml/view?usp=drive_link",
  "https://drive.google.com/file/d/1FutiSwr4oHAmymmqyRfYQ4NH816zvNot/view?usp=drive_link",
  "https://drive.google.com/file/d/18yHvGAQ45NorQBnDY7Wi5LdIeIsKNem0/view?usp=drive_link",
  "https://drive.google.com/file/d/1ElFyAPpUstRVICwJa9zVndoKnGnS5MDt/view?usp=drive_link",
  "https://drive.google.com/file/d/1IGVMtA_VoHAqR3HwlIKKGlGys3eJbISo/view?usp=drive_link",
  "https://drive.google.com/file/d/1CWylRFsiEy6XZnnTs2LZj56oqUXUoKC4/view?usp=drive_link",
  "https://drive.google.com/file/d/1QB0Z8BmxtnOW6P5SFGviaPVC7tk9rNHp/view?usp=drive_link",
  "https://drive.google.com/file/d/1GpDE-6bD5SAm-zV_v7UVIW7VzjTwBZRL/view?usp=drive_link",
  // You can now paste full URLs here too, e.g.:,
  // "https://drive.google.com/file/d/1wi3eeRLvnqNdszza2P5nSaqxmPEL4c5a/view?usp=sharing",
];

const IMAGES_PER_PAGE = 9;

// Helper function: extracts ID whether a full URL or a raw ID string is provided
const extractDriveId = (input) => {
  if (!input) return "";
  const match = input.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : input.trim();
};

const driveImageIds = rawDriveInputs
  .map(extractDriveId)
  .filter((id) => id.length > 0);

const getDriveThumbnail = (id, width = 800) =>
  `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${width}`;

const getDriveLink = (id) =>
  `https://drive.google.com/file/d/${id}/view`;

const galleryImages = driveImageIds.map((id, index) => ({
  id,
  title: `SDFL Gallery Photo ${index + 1}`,
  thumbnail: getDriveThumbnail(id, 800),
  fullImage: getDriveThumbnail(id, 1600),
  driveLink: getDriveLink(id),
}));

// =====================================
// GALLERY IMAGE CARD
// =====================================

function GalleryImage({ image, onClick }) {
  const [status, setStatus] = useState("loading");

  return (
    <div className="sdfl-gallery-card">
      {status === "loading" && (
        <div className="sdfl-gallery-loading">
          <div className="sdfl-gallery-spinner" />
          <span>Loading image...</span>
        </div>
      )}

      {status === "error" ? (
        <div className="sdfl-gallery-error">
          <span className="sdfl-gallery-error-icon">!</span>
          <p>Image unavailable</p>
          <a
            href={image.driveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Drive
          </a>
        </div>
      ) : (
        <button
          type="button"
          className="sdfl-gallery-image-button"
          onClick={onClick}
          aria-label={`View ${image.title}`}
        >
          <img
            src={image.thumbnail}
            alt={image.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setStatus("loaded")}
            onError={() => {
              setStatus("error");
              console.error(
                "[SDFL Gallery] Failed to load:",
                image.thumbnail
              );
            }}
          />

          {status === "loaded" && (
            <div className="sdfl-gallery-card-overlay">
              <span className="sdfl-gallery-zoom-icon">
                ⤢
              </span>
            </div>
          )}
        </button>
      )}
    </div>
  );
}

// =====================================
// MAIN GALLERY COMPONENT
// =====================================

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fullImageFailed, setFullImageFailed] = useState(false);

  const galleryRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const totalPages = Math.ceil(
    galleryImages.length / IMAGES_PER_PAGE
  );

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;

  const currentImages = galleryImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const selectedImage =
    selectedIndex !== null
      ? galleryImages[selectedIndex]
      : null;

  // =====================================
  // PAGINATION
  // =====================================

  const changePage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    setCurrentPage(page);
    setSelectedIndex(null);

    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // =====================================
  // LIGHTBOX FUNCTIONS
  // =====================================

  const openLightbox = (index) => {
    previousFocusRef.current = document.activeElement;
    setFullImageFailed(false);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setFullImageFailed(false);
    setSelectedIndex((current) =>
      (current + 1) % galleryImages.length
    );
  };

  const previousImage = () => {
    setFullImageFailed(false);
    setSelectedIndex((current) =>
      (current - 1 + galleryImages.length) %
      galleryImages.length
    );
  };

  // =====================================
  // KEYBOARD NAVIGATION
  // =====================================

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setFullImageFailed(false);
        setSelectedIndex((current) =>
          (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setFullImageFailed(false);
        setSelectedIndex((current) =>
          (current - 1 + galleryImages.length) %
          galleryImages.length
        );
      }

      if (event.key === "Tab") {
        const dialog = document.querySelector(
          ".sdfl-gallery-lightbox"
        );

        const focusable = Array.from(
          dialog?.querySelectorAll("button, a[href]") || []
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) {
      previousFocusRef.current?.focus?.();
    }
  }, [selectedIndex]);

  // =====================================
  // JSX
  // =====================================

  return (
    <main className="sdfl-gallery-page">
      {/* HERO SECTION */}

      <section className="sdfl-gallery-hero">
        <span className="sdfl-gallery-eyebrow">
          OUR MEMORIES
        </span>

        <h1>SDFL Gallery</h1>

        <p>
          Explore memorable moments from our training
          programmes, events, workshops, and journey.
        </p>
      </section>

      {/* PHOTO COLLECTION */}

      <section
        className="sdfl-gallery-section"
        ref={galleryRef}
      >
        <div className="sdfl-gallery-container">
          <div className="sdfl-gallery-section-heading">
            <div>
              <span className="sdfl-gallery-subtitle">
                PHOTO COLLECTION
              </span>
              <h2>Moments That Matter</h2>
            </div>

            <span className="sdfl-gallery-count">
              {galleryImages.length} Photos
            </span>
          </div>

          {/* IMAGE GRID */}

          <div className="sdfl-gallery-grid">
            {currentImages.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                onClick={() =>
                  openLightbox(startIndex + index)
                }
              />
            ))}
          </div>

          {/* PAGINATION */}

          {totalPages > 1 && (
            <nav
              className="sdfl-gallery-pagination"
              aria-label="Gallery pagination"
            >
              <button
                type="button"
                className="sdfl-page-arrow"
                onClick={() =>
                  changePage(currentPage - 1)
                }
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                &#10094;
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`sdfl-page-number ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => changePage(page)}
                  aria-label={`Go to page ${page}`}
                  aria-current={
                    currentPage === page
                      ? "page"
                      : undefined
                  }
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                className="sdfl-page-arrow"
                onClick={() =>
                  changePage(currentPage + 1)
                }
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                &#10095;
              </button>
            </nav>
          )}

          {/* BACK TO ABOUT */}

          <div className="sdfl-gallery-back-wrapper">
            <a
              href="/about"
              className="sdfl-gallery-back-btn"
            >
              <span aria-hidden="true">&#8592;</span>
              Back to About
            </a>
          </div>
        </div>
      </section>

      {/* FULL SCREEN IMAGE VIEWER */}

      {selectedImage && (
        <div
          className="sdfl-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="SDFL Photo Viewer"
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="sdfl-gallery-close"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            &times;
          </button>

          <button
            type="button"
            className="sdfl-gallery-nav sdfl-gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div
            className="sdfl-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            {fullImageFailed ? (
              <div className="sdfl-gallery-full-error">
                <p>Unable to load the larger image.</p>

                <a
                  href={selectedImage.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open original on Google Drive
                </a>
              </div>
            ) : (
              <img
                key={selectedImage.id}
                src={selectedImage.fullImage}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                onError={() =>
                  setFullImageFailed(true)
                }
              />
            )}

            <div className="sdfl-gallery-lightbox-caption">
              <h3>{selectedImage.title}</h3>

              <span>
                {selectedIndex + 1} /{" "}
                {galleryImages.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="sdfl-gallery-nav sdfl-gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            &#10095;
          </button>
        </div>
      )}
    </main>
  );
}

export default Gallery;
