<script lang="ts">
  const features = [
    {
      name: "User Auth",
      link: "/login",
      description:
        "Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth.",
      svgContent: `<path
                  d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />`,
    },
    {
      name: "Pricing Page",
      link: "/pricing",
      description:
        "Customizable and fast pricing page, integrated into the billing portal.",
      svgContent: `<path d="M12 6V18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Blog",
      link: "/blog",
      description:
        "Blog engine with rich formatting, RSS and SEO optimization.",
      svgContent: `<path d="M20.965 7C20.8873 5.1277 20.6366 3.97975 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 12C6 10.5858 6 9.87868 6.43934 9.43934C6.87868 9 7.58579 9 9 9H15C16.4142 9 17.1213 9 17.5607 9.43934C18 9.87868 18 10.5858 18 12V16C18 17.4142 18 18.1213 17.5607 18.5607C17.1213 19 16.4142 19 15 19H9C7.58579 19 6.87868 19 6.43934 18.5607C6 18.1213 6 17.4142 6 16V12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M7 6H12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Subscriptions",
      link: "/pricing",
      description: "User friendly subscriptions powered by Stripe Checkout.",
      svgContent: `<path d="M10 16.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 13.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C21.4816 18.1752 21.7706 17.3001 21.8985 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 10L7 10M22 10L11 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Billing Portal",
      link: "/account/billing",
      description:
        "Self-serve portal for changing card, receipts, upgrades, downgrades and more.",
      svgContent: `<path d="M21 6V3.50519C21 2.92196 20.3109 2.61251 19.875 2.99999C19.2334 3.57029 18.2666 3.57029 17.625 2.99999C16.9834 2.42969 16.0166 2.42969 15.375 2.99999C14.7334 3.57029 13.7666 3.57029 13.125 2.99999C12.4834 2.42969 11.5166 2.42969 10.875 2.99999C10.2334 3.57029 9.26659 3.57029 8.625 2.99999C7.98341 2.42969 7.01659 2.42969 6.375 2.99999C5.73341 3.57029 4.76659 3.57029 4.125 2.99999C3.68909 2.61251 3 2.92196 3 3.50519V14M21 10V20.495C21 21.0782 20.3109 21.3876 19.875 21.0002C19.2334 20.4299 18.2666 20.4299 17.625 21.0002C16.9834 21.5705 16.0166 21.5705 15.375 21.0002C14.7334 20.4299 13.7666 20.4299 13.125 21.0002C12.4834 21.5705 11.5166 21.5705 10.875 21.0002C10.2334 20.4299 9.26659 20.4299 8.625 21.0002C7.98341 21.5705 7.01659 21.5705 6.375 21.0002C5.73341 20.4299 4.76659 20.4299 4.125 21.0002C3.68909 21.3876 3 21.0782 3 20.495V18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.5 15.5H11.5M16.5 15.5H14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16.5 12H12.5M7.5 12H9.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.5 8.5H16.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "User Dashboard",
      link: "/account/settings",
      description:
        "User profile, user settings, update email/password, billing, and more.",
      svgContent: `<circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
<path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Performance",
      newPage: true,
      description:
        "Pre-rendering. Compiled on deployment to remove unused CSS/JS. Perfect 100/100 Google performance scores.",
      svgContent: `<path d="M15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Responsive",
      description: "Designed for mobile and desktop.",
      svgContent: `<path d="M2 14V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H9C11.8284 22 13.2426 22 14.1213 21.1213C15 20.2426 15 18.8284 15 16V8C15 5.17157 15 3.75736 14.1213 2.87868C13.2426 2 11.8284 2 9 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.5 10.0068C19.3597 10.0337 20.414 10.1717 21.1213 10.879C22 11.7577 22 13.1719 22 16.0003C22 18.8287 22 20.243 21.1213 21.1216C20.414 21.829 19.3597 21.9669 17.5 21.9938" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M19 18V14" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 17.5C10 18.3284 9.32843 19 8.5 19C7.67157 19 7 18.3284 7 17.5C7 16.6716 7.67157 16 8.5 16C9.32843 16 10 16.6716 10 17.5Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M20.5 6.98598L22 8C22 4.98532 19.8377 2.48275 17 2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
    },
    {
      name: "Delightful Tech",
      description:
        "Tools you'll love working with, including SvelteKit, Tailwind, Postgres, and Supabase. UI Components and themes from DaisyUI.",
      svgContent: `<path d="M4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C11.0461 4 10.2361 4.2374 9 4.71221" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M5.76613 10L4.97883 10.3149C2.99294 11.1093 2 11.5065 2 12C2 12.4935 2.99294 12.8907 4.97883 13.6851L7.7873 14.8085C9.77318 15.6028 10.7661 16 12 16C13.2339 16 14.2268 15.6028 16.2127 14.8085L19.0212 13.6851C21.0071 12.8907 22 12.4935 22 12C22 11.5065 21.0071 11.1093 19.0212 10.3149L18.2339 10" stroke="#1C274C" stroke-width="1.5"/>
<path d="M19.0212 17.6851C21.0071 16.8907 22 16.4935 22 16C22 15.5065 21.0071 15.1093 19.0212 14.3149L18.2339 14M5.76613 14L4.97883 14.3149C2.99294 15.1093 2 15.5065 2 16C2 16.4935 2.99294 16.8907 4.97883 17.6851L7.7873 18.8085C9.77318 19.6028 10.7661 20 12 20C12.9539 20 13.7639 19.7626 15 19.2878" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
`,
    },
    {
      name: "Extensible",
      description:
        "All the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.",
      svgContent: `<path d="M12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5H12.75ZM18 16.5L18.5303 17.0303C18.8232 16.7374 18.8232 16.2626 18.5303 15.9697L18 16.5ZM15.9697 17.4697C15.6768 17.7626 15.6768 18.2374 15.9697 18.5303C16.2626 18.8232 16.7374 18.8232 17.0303 18.5303L15.9697 17.4697ZM17.0303 14.4697C16.7374 14.1768 16.2626 14.1768 15.9697 14.4697C15.6768 14.7626 15.6768 15.2374 15.9697 15.5303L17.0303 14.4697ZM11.25 6.5V12.5H12.75V6.5H11.25ZM16 17.25H18V15.75H16V17.25ZM17.4697 15.9697L15.9697 17.4697L17.0303 18.5303L18.5303 17.0303L17.4697 15.9697ZM18.5303 15.9697L17.0303 14.4697L15.9697 15.5303L17.4697 17.0303L18.5303 15.9697ZM11.25 12.5C11.25 15.1234 13.3766 17.25 16 17.25V15.75C14.2051 15.75 12.75 14.2949 12.75 12.5H11.25Z" fill="#1C274C"/>
<path d="M12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5H12.75ZM6 16.5L5.46967 15.9697C5.17678 16.2626 5.17678 16.7374 5.46967 17.0303L6 16.5ZM6.96967 18.5303C7.26256 18.8232 7.73744 18.8232 8.03033 18.5303C8.32322 18.2374 8.32322 17.7626 8.03033 17.4697L6.96967 18.5303ZM8.03033 15.5303C8.32322 15.2374 8.32322 14.7626 8.03033 14.4697C7.73744 14.1768 7.26256 14.1768 6.96967 14.4697L8.03033 15.5303ZM11.25 6.5V12.5H12.75V6.5H11.25ZM8 15.75H6V17.25H8V15.75ZM5.46967 17.0303L6.96967 18.5303L8.03033 17.4697L6.53033 15.9697L5.46967 17.0303ZM6.53033 17.0303L8.03033 15.5303L6.96967 14.4697L5.46967 15.9697L6.53033 17.0303ZM11.25 12.5C11.25 14.2949 9.79493 15.75 8 15.75V17.25C10.6234 17.25 12.75 15.1234 12.75 12.5H11.25Z" fill="#1C274C"/>
<path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
`,
    },
    {
      name: "Free to host",
      description:
        "Instructions included for getting setup on Cloudflare+Supabase hosting. Free to start, and cost effective to scale.",
      link: "https://github.com/CriticalMoments/CMSaasStarter/blob/main/README.md#pricing",
      linkText: "Docs",
      newPage: true,
      svgContent: `<path d="M13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.5691 12.2533L17.7819 12.3762C18.4391 12.7556 19.2652 12.6719 19.8329 12.1685C20.347 11.7126 21.0792 11.597 21.7087 11.8723L22.0002 11.9997" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5352 3C10.1977 3.55206 10.2823 4.26344 10.7399 4.72097L10.8377 4.81885C11.2309 5.21201 11.3759 5.78959 11.215 6.32182" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.561 4.39648C13.7621 4.19542 13.8626 4.09489 13.9788 4.05804C14.0772 4.02688 14.1827 4.02688 14.281 4.05804C14.3973 4.09489 14.4978 4.19542 14.6989 4.39648C14.8999 4.59753 15.0004 4.69806 15.0373 4.8143C15.0685 4.91262 15.0685 5.01817 15.0373 5.11648C15.0004 5.23272 14.8999 5.33325 14.6989 5.53431C14.4978 5.73536 14.3973 5.83589 14.281 5.87274C14.1827 5.90391 14.0772 5.90391 13.9788 5.87274C13.8626 5.83589 13.7621 5.73536 13.561 5.53431C13.36 5.33325 13.2594 5.23272 13.2226 5.11648C13.1914 5.01817 13.1914 4.91262 13.2226 4.8143C13.2594 4.69806 13.36 4.59753 13.561 4.39648Z" fill="#1C274C"/>
<path d="M19.4682 7.46822C19.7136 7.22283 19.8363 7.10014 19.9747 7.04681C20.1367 6.9844 20.3161 6.9844 20.4781 7.04681C20.6165 7.10014 20.7392 7.22283 20.9846 7.46822C21.23 7.71362 21.3527 7.83631 21.406 7.97472C21.4684 8.1367 21.4684 8.31609 21.406 8.47807C21.3527 8.61649 21.23 8.73918 20.9846 8.98457C20.7392 9.22996 20.6165 9.35266 20.4781 9.40599C20.3161 9.4684 20.1367 9.4684 19.9747 9.40599C19.8363 9.35266 19.7136 9.22996 19.4682 8.98457C19.2228 8.73918 19.1001 8.61649 19.0468 8.47807C18.9844 8.31609 18.9844 8.1367 19.0468 7.97472C19.1001 7.83631 19.2228 7.71362 19.4682 7.46822Z" fill="#1C274C"/>
<path d="M6.92737 3.94079C7.13683 3.73132 7.47645 3.73132 7.68592 3.94079C7.89539 4.15026 7.89539 4.48988 7.68592 4.69935C7.47645 4.90882 7.13683 4.90882 6.92737 4.69935C6.7179 4.48988 6.7179 4.15026 6.92737 3.94079Z" fill="#1C274C"/>
<path d="M19.0582 15.3134C19.2677 15.1039 19.6073 15.1039 19.8168 15.3134C20.0262 15.5228 20.0262 15.8624 19.8168 16.0719C19.6073 16.2814 19.2677 16.2814 19.0582 16.0719C18.8488 15.8624 18.8488 15.5228 19.0582 15.3134Z" fill="#1C274C"/>
<path d="M17.5 9.74145C17.7095 9.53198 18.0491 9.53198 18.2586 9.74145C18.468 9.95092 18.468 10.2905 18.2586 10.5C18.0491 10.7095 17.7095 10.7095 17.5 10.5C17.2905 10.2905 17.2905 9.95092 17.5 9.74145Z" fill="#1C274C"/>
`,
    },
    {
      name: "Scaleable",
      description:
        "Handle new users and scale with horizontally scaling edge functions.",
      svgContent: `<path d="M3 22H21" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17V11C7 10.0572 7 9.58579 6.70711 9.29289C6.41421 9 5.94281 9 5 9C4.05719 9 3.58579 9 3.29289 9.29289C3 9.58579 3 10.0572 3 11V13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M21 11V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>

`,
    },
  ]

  import { PUBLIC_SITE_NAME } from "$env/static/public"
</script>

<svelte:head>
  <title>{PUBLIC_SITE_NAME}</title>
  <meta name="description" content="{PUBLIC_SITE_NAME} Home Page" />
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4"
      >
        SaasStarter Demo
      </div>

      <div class="text-4xl md:text-6xl font-bold px-2">
        The
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >open source</span
        >,
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >fast</span
        >, and
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >free to host</span
        >
        <span> SaaS template</span>
      </div>
      <div class="mt-4 text-sm md:text-lg">
        Built with <a
          href="https://kit.svelte.dev"
          class="link font-bold"
          target="_blank">SvelteKit</a
        >,
        <a href="https://supabase.com" class="link font-bold" target="_blank"
          >Supabase</a
        >,
        <a href="https://stripe.com" class="link font-bold" target="_blank"
          >Stripe</a
        >,
        <a href="https://tailwindcss.com" class="link font-bold" target="_blank"
          >Tailwind</a
        >,
        <a href="https://daisyui.com" class="link font-bold" target="_blank"
          >daisyUI</a
        >, and
        <a
          href="https://www.postgresql.org"
          class="link font-bold"
          target="_blank">Postgres</a
        >
      </div>

      <div class="mt-6">
        <a href="https://github.com/CriticalMoments/CMSaasStarter">
          <button class="btn btn-primary btn-sm px-6">★ us on Github</button>
        </a>
        <a
          href="https://github.com/CriticalMoments/CMSaasStarter/tree/main#saas-starter"
        >
          <button class="btn btn-outline btn-primary btn-sm px-6 mt-3 mx-2"
            >Read the Docs</button
          >
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
      >
        Explore the Features
      </div>
      <div class="mt-6 text-xl font-bold">
        And try them on this
        <span
          class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
        >
          fully functional demo
        </span>
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div
          class="card bg-white w-[270px] md:w-[300px] min-h-[300px] flex-none shadow-xl"
        >
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.link}
              <a
                href={feature.link}
                class="pb-4"
                target={feature.newPage ? "_blank" : ""}
              >
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px]"
                  >{feature.linkText ? feature.linkText : "Try It"}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mt-4"
      >
        See it in Action
      </div>
      <div
        class="flex flex-col lg:flex-row mt-8 gap-6 place-content-center content-center"
      >
        <div class="hidden md:block">
          <a href="https://criticalmoments.io" target="_blank" class="link">
            <div class="mockup-browser border">
              <div class="mockup-browser-toolbar">
                <div class="input" style="background:#eee;">
                  https://criticalmoments.io
                </div>
              </div>
              <div class="flex justify-center">
                <img
                  alt="Screenshot of criticalmoments.io homepage"
                  src="/images/example-home.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="md:hidden">
          <a href="https://criticalmoments.io" target="_blank" class="link">
            <div class="card shadow-xl border overflow-hidden">
              <img
                alt="Screenshot of criticalmoments.io homepage"
                src="/images/example-home.png"
              />
            </div></a
          >
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              <a href="https://criticalmoments.io" class="" target="_blank"
                >SaaS Starter was created by <span
                  class="font-bold whitespace-nowrap">Critical Moments</span
                >: a SDK to to help mobile apps
                <span class="underline decoration-secondary decoration-[3px]"
                  >increase conversion rates and app-ratings.</span
                ></a
              >
            </div>
            <div class="px-4 mt-6 text-lg md:text-xl">
              Our <a
                href="https://criticalmoments.io"
                class="link font-bold"
                target="_blank">webpage</a
              > is the best example of SaaS Starter with style and real content.
            </div>
            <div class="mt-4 text-large">
              <a href="https://criticalmoments.io" target="_blank">
                <button class="btn btn-primary btn-wide mt-3"
                  >See it in Action</button
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
