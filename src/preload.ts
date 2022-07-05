window.addEventListener('DOMContentLoaded', () => {
    // take user back if they go to account page
    // account feature not yet supported in this app
    if (window.location.pathname.startsWith('/account')) {
        alert('Accounts not yet supported');
        window.location.pathname = '/';
    }

    // add html metadata
    document.body.setAttribute(
        'in-app',
        window.location.pathname.startsWith('/watch') ? 'player' : ''
    );
    if (window.location.pathname.startsWith('/genre/'))
        document.body.setAttribute('in-app', 'genre');

    // add root navigation html
    const rootNav = document.createElement('nav');
    rootNav.classList.add('app-navigation');

    const rootNavLogo = document.createElement('div');
    rootNavLogo.classList.add('logo');
    rootNavLogo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 990.2 102.4" fill="currentColor">
    <path d="M125.64,565.89h-16V543h76.8V645.25H163.53V628H133.06l-4.61,17.28H104.9Zm37.89,39.17V565.89H149.19L139,605.06Z" transform="translate(-104.9 -542.85)"/>
    <path d="M229.83,542.85v12.29l35.33,20.09V542.85h22.91v102.4H265.16V603.14L229.83,583v62.21H206.92V542.85Z" transform="translate(-104.9 -542.85)"/>
    <path d="M331.59,542.85v23h-23v-23Zm0,36.22v66.18h-23V579.07Z" transform="translate(-104.9 -542.85)"/>
    <path d="M352.07,645.25V542.85h50.17l9.35,11.39L420.16,543H469.7V645.25H446.92V567.68H428.87l-6.27,6.66v70.91H399.68V574.34l-6.52-6.66H375v77.57Z" transform="translate(-104.9 -542.85)"/>
    <path d="M490.18,645.25V543h85.76l-10.63,63.74H513.09v15.74h57.34v22.79Zm22.91-61.44h32L548,565.89H513.09Z" transform="translate(-104.9 -542.85)"/>
    <path d="M596.42,645.12V542.85h87v102.4Zm64.12-22.78V565.76H619.33v56.58Z" transform="translate(-104.9 -542.85)"/>
    <path d="M726.85,542.85v12.29l35.33,20.09V542.85h22.91v102.4H762.18V603.14L726.85,583v62.21H703.94V542.85Z" transform="translate(-104.9 -542.85)"/>
    <path d="M887.23,645.25H805.57V622.46h59v-17.4h-59V542.85h81.66v22.91H828.48v16.77h58.75Z" transform="translate(-104.9 -542.85)"/>
    <path d="M907.71,645.25V543h85.76l-10.62,63.74H930.62v15.74H988v22.79Zm22.91-61.44h32l3-17.92h-35Z" transform="translate(-104.9 -542.85)"/>
    <path d="M1036.86,542.85v12.29l35.33,20.09V542.85h22.91v102.4h-22.91V603.14L1036.86,583v62.21H1014V542.85Z" transform="translate(-104.9 -542.85)"/>
</svg>`;
    rootNav.appendChild(rootNavLogo);
    document.body.before(rootNav);
});
