import { communityHeroImage, socialCrew } from "../data/socialCrew.js";

const platformIcons = {
  facebook: `
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97H15.83c-1.49 0-1.955.93-1.955 1.884v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 132.004 132" width="18" height="18" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="instagramGradientBlue">
          <stop offset="0" stop-color="#3771c8"/>
          <stop offset=".128" stop-color="#3771c8"/>
          <stop offset="1" stop-color="#60f" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="instagramGradientWarm">
          <stop offset="0" stop-color="#fd5"/>
          <stop offset=".1" stop-color="#fd5"/>
          <stop offset=".5" stop-color="#ff543e"/>
          <stop offset="1" stop-color="#c837ab"/>
        </linearGradient>
        <radialGradient id="instagramGradientBase" cx="158.429" cy="578.088" r="65" href="#instagramGradientWarm" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"/>
        <radialGradient id="instagramGradientOverlay" cx="147.694" cy="473.455" r="65" href="#instagramGradientBlue" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"/>
      </defs>
      <path fill="url(#instagramGradientBase)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
      <path fill="url(#instagramGradientOverlay)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/>
      <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z"/>
    </svg>
  `,
  tiktok: `
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
      <path fill="#25f4ee" d="M14.1 2h3.1c.2 1.5.8 2.8 1.8 3.8 1 .9 2.2 1.4 3.7 1.6v3.8c-1.9 0-3.6-.6-5.1-1.6v6.1c0 3.8-3 6.8-6.8 6.8-3.6 0-6.6-2.8-6.8-6.4-.2-3.9 3-7.1 6.8-7.1.5 0 1 .1 1.5.2v4.1a3 3 0 0 0-1.7-.4c-1.7.1-3.1 1.6-3 3.3.1 1.6 1.4 2.9 3 3 1.8.1 3.3-1.4 3.3-3.2V2h.2Z"/>
      <path fill="#ff2b77" d="M15.4 2h2c.3 1.3.9 2.4 1.8 3.2.9.8 2 1.3 3.5 1.5v4.5c-1.9 0-3.6-.6-5.1-1.6v6.1c0 3.8-3 6.8-6.8 6.8-2.2 0-4.1-1-5.4-2.6a6.8 6.8 0 0 0 11.5-5V8.8c1.5 1.1 3.2 1.6 5.1 1.6V8.2c-3.4-.4-6.2-2.8-6.6-6.2Z"/>
      <path fill="#fff" d="M12.9 2H16c.2 1.5.8 2.8 1.8 3.8 1 .9 2.2 1.4 3.7 1.6v3.8c-1.9 0-3.6-.6-5.1-1.6v6.1c0 3.8-3 6.8-6.8 6.8-3.6 0-6.6-2.8-6.8-6.4-.2-3.9 3-7.1 6.8-7.1.5 0 1 .1 1.5.2v4.1a3 3 0 0 0-1.7-.4c-1.7.1-3.1 1.6-3 3.3.1 1.6 1.4 2.9 3 3 1.8.1 3.3-1.4 3.3-3.2V2h.2Z"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M13.9 10.5 21.3 2h-1.8l-6.4 7.4L8 2H2l7.8 11.3L2 22h1.8l6.8-7.8L16 22h6l-8.1-11.5zm-2.4 2.8-.8-1.1L4.5 3.3h2.7l5 7.1.8 1.1 6.5 9.3h-2.7l-5.3-7.5z"/>
    </svg>
  `,
};

function platformIcon(icon) {
  return `<span class="crew-platform-icon crew-platform-icon--${icon}">${platformIcons[icon] || icon}</span>`;
}

function crewCard(member) {
  const style = ` style="--crew-accent: ${member.accentColor};"`;

  return `
    <article class="crew-card"${style}>
      <div class="crew-platform-icons crew-platform-icons--hero">
        ${member.links.map((link) => platformIcon(link.icon)).join("")}
      </div>
      <h3>${member.platforms.join(" & ")}</h3>
      <div class="crew-card-actions">
        ${member.links.map((link) => `
          <a class="crew-social-button crew-social-button--${link.icon}" href="${link.href}" aria-label="${link.label}"${link.href.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            <span>${link.label}</span>
            <span aria-hidden="true">→</span>
          </a>
        `).join("")}
      </div>
      <div class="crew-person-row">
        <img class="crew-avatar" src="${member.image}" alt="${member.name}">
        <span>${member.name}</span>
      </div>
    </article>
  `;
}

export function CommunityPage() {
  return `
    <main class="community-page">
      <section class="community-landing reveal">
        <div class="community-hero-card">
          <div class="community-copy-panel">
            <p class="community-breadcrumb">HOME <span>/</span> COMMUNITY</p>
            <p class="community-label">LET'S BE FRIENDS</p>
            <h1>Different people.<br>One adventure.</h1>
            <p class="community-note">Pick a platform.<br>We'll see you there.<span class="community-paper-plane" aria-hidden="true"><svg viewBox="0 0 86 28" focusable="false"><path class="community-paper-plane-trail" d="M2 18c10-7 19-9 31-5 7 2 12 2 17-1"/><path class="community-paper-plane-mark" d="M54 5 82 14 54 24l5-9-5-10Z"/><path class="community-paper-plane-fold" d="M59 15h23M59 15l-5 9"/></svg></span></p>
          </div>
          <div class="community-image-panel">
            <img src="${communityHeroImage}" alt="Travel Science crew at a summer campsite">
          </div>
          <div class="crew-grid">
            ${socialCrew.map(crewCard).join("")}
          </div>
          <p class="community-mobile-ending">See you out there.</p>
        </div>
      </section>
    </main>
  `;
}
