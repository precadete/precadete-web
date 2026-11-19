{
const C = window.PC_CONFIG || {redes: {}};
const EMBLEM = '<path d="M50 6l38 12v28c0 25-16 40-38 48C28 86 12 71 12 46V18z" fill="#5b5ff0"/><path d="M50 6l38 12v28c0 25-16 40-38 48z" fill="#4a4ee0"/><path d="M50 14l30 9.5V46c0 20-12.5 32-30 39-17.5-7-30-19-30-39V23.5z" fill="none" stroke="#aab0ff" stroke-width="2"/><text x="50" y="60" text-anchor="middle" font-family="Georgia,serif" font-size="34" font-weight="700" fill="#fff" letter-spacing="-1">PC</text>';
document.querySelectorAll('[data-emblem]').forEach(s => { if (!s.innerHTML.trim()) s.innerHTML = EMBLEM; });

const waTxt = C.whatsapp ? '+' + C.whatsapp.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, '$1 $2 $3 $4') : 'por confirmar';
document.querySelectorAll('[data-correo]').forEach(e => e.textContent = C.correo || 'por confirmar');
document.querySelectorAll('[data-wa]').forEach(e => e.textContent = waTxt);

const wa = document.getElementById('wa'), mail = document.getElementById('mail');
if (wa) { if (C.whatsapp) wa.href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent('Hola, quiero eliminar mis datos de PRE CADETE. Mi número de celular es: ')}`; else wa.setAttribute('aria-disabled', 'true'); }
if (mail) { if (C.correo) mail.href = `mailto:${C.correo}?subject=${encodeURIComponent('Eliminar mis datos')}`; else mail.setAttribute('aria-disabled', 'true'); }

const ICON = {
  facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2"/>',
  whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3a.5.5 0 0 0 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/>',
  tiktok: '<path d="M14 3h3a4 4 0 0 0 4 4v3a7 7 0 0 1-4-1.3V15a6 6 0 1 1-6-6v3.2A2.8 2.8 0 1 0 14 15z"/>',
  youtube: '<path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z"/>'
};
const NOM = {facebook: 'Facebook', tiktok: 'TikTok', instagram: 'Instagram', whatsapp: 'WhatsApp'};
const soc = document.getElementById('redes');
if (soc) {
  const waUrl = C.whatsapp ? `https://wa.me/${C.whatsapp}?text=${encodeURIComponent('Hola, quiero más información sobre PRE CADETE.')}` : '';
  const R = C.redes || {};
  const r = [['facebook', R.facebook], ['tiktok', R.tiktok], ['instagram', R.instagram], ['whatsapp', waUrl]];
  soc.innerHTML = r.map(([k, u]) => `<a href="${u || '#'}" rel="noopener" aria-label="${NOM[k]}" title="${NOM[k]}"><svg viewBox="0 0 24 24" fill="currentColor">${ICON[k]}</svg></a>`).join('');
}
document.querySelectorAll('[data-wa-ic]').forEach(s => s.innerHTML = ICON.whatsapp);
const waf = document.getElementById('waf');
if (waf && C.whatsapp) waf.href = `https://wa.me/${C.whatsapp}?text=${encodeURIComponent('Hola, quiero más información sobre PRE CADETE.')}`;
const gp = document.querySelectorAll('[data-play]');
if (C.playStore) gp.forEach(a => { a.href = C.playStore; a.rel = 'noopener'; const s = a.querySelector('small'); if (s) s.textContent = 'Disponible en'; });
}
document.querySelectorAll('table.stack').forEach(t => { const h = [...t.rows[0].cells].map(c => c.textContent); [...t.tBodies[0].rows].forEach(r => [...r.cells].forEach((c, i) => c.dataset.l = h[i])); });
