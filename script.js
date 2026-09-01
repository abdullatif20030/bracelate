

/* ==========================================================================
   AUREL — script.js
   Vanilla JS. Organized into clear modules. No external framework.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------
     DATA — realistic product & content data
     ------------------------------------------------------------------ */
  const COLLECTIONS = [
    { id:'classic', name:'Classic Collection', desc:'Timeless chain links in polished gold vermeil.', img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop' },
    { id:'minimal', name:'Minimal Collection', desc:'Thin, barely-there bands built for everyday layering.', img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop' },
    { id:'premium', name:'Premium Collection', desc:'Solid 14k gold pieces with hand-set stones.', img:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop' },
    { id:'mens', name:"Men's Collection", desc:'Weighted cuffs and curb chains in brushed finishes.', img:'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop' },
    { id:'womens', name:"Women's Collection", desc:'Delicate beaded and charm styles for stacking.', img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop' },
    { id:'limited', name:'Limited Edition', desc:'Small-batch drops, individually numbered.', img:'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop' }
  ];

  const PRODUCTS = [
    { id:'p1', name:'Meridian Chain', cat:'chain', price:145, rating:5, img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop', desc:'Flat curb-link chain in 18k gold vermeil.', colors:['#C6A15B','#B8B8B8','#E8B58C'] },
    { id:'p2', name:'Solstice Cuff', cat:'cuff', price:210, rating:5, img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop', desc:'Open-back cuff hammered by hand for texture.', colors:['#C6A15B','#8B6F3F'] },
    { id:'p3', name:'Riviera Beads', cat:'beaded', price:98, rating:4, img:'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop', desc:'Freshwater pearl and gold bead stacking bracelet.', colors:['#F2EFE7','#C6A15B'] },
    { id:'p4', name:'Aurora Diamond Line', cat:'diamond', price:420, rating:5, img:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop', desc:'Bezel-set lab diamonds along a delicate line.', colors:['#C6A15B','#E9E2D2'] },
    { id:'p5', name:'Harbor Curb', cat:'chain', price:165, rating:4, img:'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop', desc:'Heavyweight curb chain for everyday wear.', colors:['#8B6F3F','#B8B8B8'] },
    { id:'p6', name:'Terra Cuff', cat:'cuff', price:245, rating:5, img:'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop', desc:'Sculptural solid cuff with brushed finish.', colors:['#C6A15B'] },
    { id:'p7', name:'Linen Knot Beads', cat:'beaded', price:88, rating:4, img:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop', desc:'Hand-knotted stone beads on waxed cord and gold.', colors:['#8B6F3F','#F2EFE7'] },
    { id:'p8', name:'Halo Diamond Tennis', cat:'diamond', price:450, rating:5, img:'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop', desc:'Classic tennis bracelet, individually numbered.', colors:['#C6A15B','#E9E2D2'] }
  ];

  const REVIEWS = [
    { name:'Camille R.', loc:'Paris, France', stars:5, text:'It hasn\u2019t left my wrist in eight months and still looks brand new. Worth every euro.', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop' },
    { name:'Daniel K.', loc:'Toronto, Canada', stars:5, text:'Bought the Solstice Cuff for my wife and the packaging alone made it feel like a real occasion.', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop' },
    { name:'Amara O.', loc:'Lagos, Nigeria', stars:5, text:'The weight and finish are noticeably better than pieces I\u2019ve paid twice as much for elsewhere.', img:'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200&auto=format&fit=crop' },
    { name:'Haruki T.', loc:'Osaka, Japan', stars:4, text:'Clean, minimal, exactly as pictured. Shipping to Japan took five days, faster than expected.', img:'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop' }
  ];

  const SOCIAL_IMAGES = [
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=500&auto=format&fit=crop'
  ];

  const fmt = (n) => `$${n.toLocaleString('en-US')}`;
  const stars = (n) => '\u2605'.repeat(n) + '\u2606'.repeat(5-n);

  /* ------------------------------------------------------------------
     PRELOADER
     ------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('is-hidden');
      document.querySelector('.hero').classList.add('is-ready');
    }, 900);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => {
    if (!preloader.classList.contains('is-hidden')) {
      preloader.classList.add('is-hidden');
      document.querySelector('.hero').classList.add('is-ready');
    }
  }, 2600);

  /* ------------------------------------------------------------------
     CUSTOM CURSOR
     ------------------------------------------------------------------ */
  const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const cursorRing = document.getElementById('cursorRing');
  const cursorDot = document.getElementById('cursorDot');

  if (!isTouchDevice) {
    document.body.classList.add('cursor-active');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`;
    });

    function animateRing(){
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverTargets = 'a, button, .filter-chip, input[type=range]';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('.product-card, .collection-card')) {
        cursorRing.classList.add('is-product');
      } else if (e.target.closest(hoverTargets)) {
        cursorRing.classList.add('is-hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('.product-card, .collection-card')) cursorRing.classList.remove('is-product');
      if (e.target.closest(hoverTargets)) cursorRing.classList.remove('is-hover');
    });

    // Magnetic buttons
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width/2;
        const y = e.clientY - r.top - r.height/2;
        btn.style.transform = `translate(${x*0.28}px, ${y*0.5}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = 'translate(0,0)'; });
    });
  }

  /* ------------------------------------------------------------------
     SCROLL PROGRESS + HEADER STATE + BACK TO TOP + REVEALS
     ------------------------------------------------------------------ */
  const scrollProgress = document.getElementById('scrollProgress');
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  function onScroll(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress.style.width = `${(scrollTop / docHeight) * 100}%`;
    header.classList.toggle('is-scrolled', scrollTop > 60);
    backToTop.classList.toggle('is-visible', scrollTop > 800);
  }
  document.addEventListener('scroll', onScroll, { passive:true });

  // Hero parallax (subtle)
  const heroBg = document.getElementById('heroBg');
  document.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
    }
  }, { passive:true });

  backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  function observeReveals(container = document){
    container.querySelectorAll('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------
     MOBILE NAV
     ------------------------------------------------------------------ */
  const burgerBtn = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');

  function closeAllPanels(){
    burgerBtn.classList.remove('is-active');
    mobileNav.classList.remove('is-active');
    overlay.classList.remove('is-active');
    document.getElementById('cartDrawer').classList.remove('is-active');
    document.getElementById('searchOverlay').classList.remove('is-active');
  }

  burgerBtn.addEventListener('click', () => {
    const active = burgerBtn.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active', active);
    overlay.classList.toggle('is-active', active);
    burgerBtn.setAttribute('aria-expanded', active);
  });
  overlay.addEventListener('click', closeAllPanels);
  document.querySelectorAll('.mobile-nav__link').forEach(l => l.addEventListener('click', closeAllPanels));

  /* ------------------------------------------------------------------
     SEARCH OVERLAY
     ------------------------------------------------------------------ */
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose = document.getElementById('searchClose');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('is-active');
    setTimeout(() => searchInput.focus(), 300);
  });
  searchClose.addEventListener('click', () => searchOverlay.classList.remove('is-active'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { searchOverlay.classList.remove('is-active'); closeAllPanels(); } });

  document.querySelectorAll('.search-overlay__suggestions span').forEach(s => {
    s.addEventListener('click', () => { searchInput.value = s.textContent; runSearch(s.textContent); });
  });

  function runSearch(query){
    const q = query.trim().toLowerCase();
    if (!q) { searchResults.innerHTML = ''; return; }
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.cat.includes(q));
    searchResults.innerHTML = matches.length
      ? matches.map(p => `
        <div class="search-overlay__result" data-id="${p.id}">
          <img src="${p.img}" alt="${p.name}">
          <div>
            <div class="name">${p.name}</div>
            <div class="price">${fmt(p.price)}</div>
          </div>
        </div>`).join('')
      : `<p style="color:rgba(246,242,233,.5); font-size:.88rem;">No pieces found for "${query}". Try "chains" or "gifts".</p>`;

    searchResults.querySelectorAll('.search-overlay__result').forEach(el => {
      el.addEventListener('click', () => {
        searchOverlay.classList.remove('is-active');
        openQuickView(el.dataset.id);
      });
    });
  }
  searchInput.addEventListener('input', (e) => runSearch(e.target.value));

  /* ------------------------------------------------------------------
     RENDER: COLLECTIONS
     ------------------------------------------------------------------ */
  const collectionGrid = document.getElementById('collectionGrid');
  collectionGrid.innerHTML = COLLECTIONS.map(c => `
    <div class="collection-card">
      <img class="collection-card__img" src="${c.img}" alt="${c.name} bracelet" loading="lazy">
      <div class="collection-card__overlay"></div>
      <div class="collection-card__body">
        <h3>${c.name}</h3>
        <p>${c.desc}</p>
        <span class="collection-card__link">Explore Collection <i class="fa-light fa-arrow-right"></i></span>
      </div>
    </div>
  `).join('');

  /* ------------------------------------------------------------------
     RENDER: PRODUCTS + FILTER + PRICE
     ------------------------------------------------------------------ */
  const productGrid = document.getElementById('productGrid');
  const filterCats = document.getElementById('filterCats');
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  let activeFilter = 'all';
  let maxPrice = 450;

  function renderProducts(){
    const list = PRODUCTS.filter(p =>
      (activeFilter === 'all' || p.cat === activeFilter) && p.price <= maxPrice
    );
    productGrid.innerHTML = list.length ? list.map(p => `
      <div class="product-card" data-id="${p.id}">
        <div class="product-card__media">
          <img src="${p.img}" alt="${p.name} bracelet" loading="lazy">
          <button class="product-card__wish" data-id="${p.id}" aria-label="Add to wishlist"><i class="fa-solid fa-heart"></i></button>
          <button class="product-card__quick" data-id="${p.id}">Quick View</button>
        </div>
        <div class="product-card__body">
          <div class="product-card__stars">${stars(p.rating)}</div>
          <div class="product-card__name">${p.name}</div>
          <div class="product-card__desc">${p.desc}</div>
          <div class="product-card__row">
            <span class="product-card__price">${fmt(p.price)}</span>
            <button class="product-card__add" data-id="${p.id}" aria-label="Add to cart"><i class="fa-light fa-plus"></i></button>
          </div>
        </div>
      </div>
    `).join('') : `<p style="grid-column:1/-1; color:rgba(246,242,233,.5);">No pieces match these filters yet — try widening your price range.</p>`;

    // wire interactions
    productGrid.querySelectorAll('.product-card__quick').forEach(b => b.addEventListener('click', () => openQuickView(b.dataset.id)));
    productGrid.querySelectorAll('.product-card__add').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); addToCart(b.dataset.id, 1, animOriginFor(b)); }));
    productGrid.querySelectorAll('.product-card__wish').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); toggleWishlist(b.dataset.id, b); }));
    productGrid.querySelectorAll('.product-card__media img').forEach(img => {
      img.addEventListener('click', () => openQuickView(img.closest('.product-card').dataset.id));
    });
  }

  filterCats.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterCats.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    activeFilter = chip.dataset.filter;
    renderProducts();
  });

  priceRange.addEventListener('input', () => {
    maxPrice = Number(priceRange.value);
    priceValue.textContent = maxPrice;
    renderProducts();
  });

  renderProducts();

  function animOriginFor(el){
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width/2, y: r.top + r.height/2 };
  }

  /* ------------------------------------------------------------------
     WISHLIST
     ------------------------------------------------------------------ */
  let wishlist = new Set();
  const wishBadge = document.getElementById('wishBadge');

  function toggleWishlist(id, btnEl){
    if (wishlist.has(id)) { wishlist.delete(id); btnEl.classList.remove('is-active'); showToast('Removed from wishlist', 'fa-heart-crack'); }
    else {
      wishlist.add(id); btnEl.classList.add('is-active');
      const p = PRODUCTS.find(x=>x.id===id);
      showToast(`${p.name} added to wishlist`, 'fa-heart');
    }
    wishBadge.textContent = wishlist.size;
    wishBadge.classList.toggle('is-visible', wishlist.size > 0);
  }

  /* ------------------------------------------------------------------
     CART
     ------------------------------------------------------------------ */
  let cart = []; // { id, qty }
  const cartBadge = document.getElementById('cartBadge');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsEl = document.getElementById('cartItems');
  const cartEmptyEl = document.getElementById('cartEmpty');
  const cartFooterEl = document.getElementById('cartFooter');
  const cartSubtotalEl = document.getElementById('cartSubtotal');

  function addToCart(id, qty = 1, origin = null){
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty += qty; else cart.push({ id, qty });
    renderCart();
    const p = PRODUCTS.find(x=>x.id===id);
    showToast(`${p.name} added to bag`, 'fa-bag-shopping');
    flyToCart(origin);
  }

  function flyToCart(origin){
    if (!origin) return;
    const cartBtn = document.getElementById('cartBtn').getBoundingClientRect();
    const dot = document.createElement('div');
    dot.style.cssText = `position:fixed; left:${origin.x}px; top:${origin.y}px; width:14px; height:14px; border-radius:50%; background: var(--gold); z-index:1400; pointer-events:none; transition: all .6s cubic-bezier(.16,.84,.44,1);`;
    document.body.appendChild(dot);
    requestAnimationFrame(() => {
      dot.style.left = `${cartBtn.left + cartBtn.width/2}px`;
      dot.style.top = `${cartBtn.top + cartBtn.height/2}px`;
      dot.style.transform = 'scale(.2)';
      dot.style.opacity = '0.4';
    });
    setTimeout(() => dot.remove(), 650);
  }

  function updateQty(id, delta){
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    renderCart();
  }

  function removeFromCart(id){
    cart = cart.filter(c => c.id !== id);
    renderCart();
  }

  function renderCart(){
    const count = cart.reduce((s,c)=>s+c.qty, 0);
    cartBadge.textContent = count;
    cartBadge.classList.toggle('is-visible', count > 0);

    if (cart.length === 0) {
      cartItemsEl.style.display = 'none';
      cartFooterEl.style.display = 'none';
      cartEmptyEl.style.display = 'flex';
      return;
    }
    cartItemsEl.style.display = 'block';
    cartFooterEl.style.display = 'block';
    cartEmptyEl.style.display = 'none';

    let subtotal = 0;
    cartItemsEl.innerHTML = cart.map(c => {
      const p = PRODUCTS.find(x => x.id === c.id);
      subtotal += p.price * c.qty;
      return `
        <div class="cart-item">
          <img src="${p.img}" alt="${p.name}">
          <div class="cart-item__info">
            <div class="cart-item__name">${p.name}</div>
            <div class="cart-item__meta">${fmt(p.price)} each</div>
            <div class="cart-item__row">
              <div class="cart-item__qty">
                <button data-act="dec" data-id="${c.id}" aria-label="Decrease quantity">\u2212</button>
                <span>${c.qty}</span>
                <button data-act="inc" data-id="${c.id}" aria-label="Increase quantity">+</button>
              </div>
              <span class="cart-item__price">${fmt(p.price * c.qty)}</span>
            </div>
            <button class="cart-item__remove" data-id="${c.id}">Remove</button>
          </div>
        </div>`;
    }).join('');
    cartSubtotalEl.textContent = fmt(subtotal);

    cartItemsEl.querySelectorAll('[data-act="inc"]').forEach(b => b.addEventListener('click', () => updateQty(b.dataset.id, 1)));
    cartItemsEl.querySelectorAll('[data-act="dec"]').forEach(b => b.addEventListener('click', () => updateQty(b.dataset.id, -1)));
    cartItemsEl.querySelectorAll('.cart-item__remove').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.id)));
  }
  renderCart();

  document.getElementById('cartBtn').addEventListener('click', () => cartDrawer.classList.add('is-active'));
  document.getElementById('cartClose').addEventListener('click', () => cartDrawer.classList.remove('is-active'));
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    showToast('This is a demo store — checkout isn\u2019t connected yet.', 'fa-circle-info');
  });

  /* ------------------------------------------------------------------
     QUICK VIEW MODAL
     ------------------------------------------------------------------ */
  const modal = document.getElementById('quickViewModal');
  const modalPanel = document.getElementById('modalPanel');
  const modalBackdrop = document.getElementById('modalBackdrop');
  let modalQty = 1;

  function openQuickView(id){
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    modalQty = 1;
    modalPanel.innerHTML = `
      <button class="modal__close" id="modalCloseBtn" aria-label="Close"><i class="fa-light fa-xmark"></i></button>
      <div class="modal__img"><img src="${p.img}" alt="${p.name} bracelet"></div>
      <div class="modal__body">
        <div class="product-card__stars">${stars(p.rating)}</div>
        <h2>${p.name}</h2>
        <div class="modal__price">${fmt(p.price)}</div>
        <p class="modal__desc">${p.desc} Finished by hand in our Lisbon atelier and shipped in a solid oak keepsake box.</p>
        <div class="modal__variants">
          <h4>Finish</h4>
          <div class="variant-swatches">
            ${p.colors.map((c,i)=>`<span class="variant-swatch ${i===0?'is-active':''}" style="background:${c}" data-color="${c}"></span>`).join('')}
          </div>
        </div>
        <div class="modal__qty">
          <button id="qtyMinus" aria-label="Decrease">\u2212</button>
          <span id="qtyValue">1</span>
          <button id="qtyPlus" aria-label="Increase">+</button>
        </div>
        <div class="modal__actions">
          <button class="btn btn--ghost" id="modalAddCart" style="border-color:rgba(14,13,12,.25); color:var(--charcoal);">Add to Cart</button>
          <button class="btn btn--gold" id="modalBuyNow">Buy Now</button>
        </div>
      </div>
    `;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    modalPanel.querySelectorAll('.variant-swatch').forEach(s => s.addEventListener('click', () => {
      modalPanel.querySelectorAll('.variant-swatch').forEach(x=>x.classList.remove('is-active'));
      s.classList.add('is-active');
    }));
    document.getElementById('qtyMinus').addEventListener('click', () => { if(modalQty>1){ modalQty--; document.getElementById('qtyValue').textContent = modalQty; }});
    document.getElementById('qtyPlus').addEventListener('click', () => { modalQty++; document.getElementById('qtyValue').textContent = modalQty; });
    document.getElementById('modalCloseBtn').addEventListener('click', closeQuickView);
    document.getElementById('modalAddCart').addEventListener('click', () => { addToCart(p.id, modalQty); closeQuickView(); });
    document.getElementById('modalBuyNow').addEventListener('click', () => { addToCart(p.id, modalQty); closeQuickView(); cartDrawer.classList.add('is-active'); });
  }
  function closeQuickView(){
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
  modalBackdrop.addEventListener('click', closeQuickView);

  /* ------------------------------------------------------------------
     TOASTS
     ------------------------------------------------------------------ */
  const toastStack = document.getElementById('toastStack');
  function showToast(message, icon = 'fa-circle-check'){
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-light ${icon}"></i><span>${message}</span>`;
    toastStack.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('is-leaving');
      setTimeout(() => toast.remove(), 320);
    }, 2600);
  }

  /* ------------------------------------------------------------------
     COUNTDOWN (Limited Edition) — targets 6 days from load
     ------------------------------------------------------------------ */
  const countdownTarget = new Date().getTime() + (6*24*60*60*1000) + (14*60*60*1000);
  function updateCountdown(){
    const now = new Date().getTime();
    const diff = Math.max(0, countdownTarget - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdDays').textContent = String(d).padStart(2,'0');
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMins').textContent = String(m).padStart(2,'0');
    document.getElementById('cdSecs').textContent = String(s).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ------------------------------------------------------------------
     REVIEWS SLIDER
     ------------------------------------------------------------------ */
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewsDots = document.getElementById('reviewsDots');
  let reviewIndex = 0;

  reviewsTrack.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <img src="${r.img}" alt="${r.name}">
      <div>
        <div class="review-card__stars">${stars(r.stars)}</div>
        <p class="review-card__text">\u201C${r.text}\u201D</p>
        <div class="review-card__name">${r.name}</div>
        <div class="review-card__loc">${r.loc}</div>
      </div>
    </div>
  `).join('');
  reviewsDots.innerHTML = REVIEWS.map((_,i) => `<span class="${i===0?'is-active':''}" data-i="${i}"></span>`).join('');

  function goToReview(i){
    reviewIndex = (i + REVIEWS.length) % REVIEWS.length;
    reviewsTrack.style.transform = `translateX(-${reviewIndex * 100}%)`;
    reviewsDots.querySelectorAll('span').forEach((d,idx) => d.classList.toggle('is-active', idx===reviewIndex));
  }
  document.getElementById('reviewPrev').addEventListener('click', () => goToReview(reviewIndex-1));
  document.getElementById('reviewNext').addEventListener('click', () => goToReview(reviewIndex+1));
  reviewsDots.querySelectorAll('span').forEach(d => d.addEventListener('click', () => goToReview(Number(d.dataset.i))));
  setInterval(() => goToReview(reviewIndex+1), 6000);

  /* ------------------------------------------------------------------
     SOCIAL GRID
     ------------------------------------------------------------------ */
  document.getElementById('socialGrid').innerHTML = SOCIAL_IMAGES.map(src => `
    <div class="social-item"><img src="${src}" alt="AUREL bracelet lifestyle photo" loading="lazy"></div>
  `).join('');

  /* ------------------------------------------------------------------
     NEWSLETTER FORM
     ------------------------------------------------------------------ */
  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail');
    document.getElementById('newsletterSuccess').classList.add('is-visible');
    showToast('Welcome to the Inner Circle', 'fa-envelope-circle-check');
    email.value = '';
  });

  /* ------------------------------------------------------------------
     CONTACT FORM
     ------------------------------------------------------------------ */
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent — we\u2019ll reply within one business day.', 'fa-paper-plane');
    e.target.reset();
  });

  /* ------------------------------------------------------------------
     AI SHOPPING ASSISTANT (demo responses; structured for a real API later)
     ------------------------------------------------------------------ */
  const aiFab = document.getElementById('aiFab');
  const aiChat = document.getElementById('aiChat');
  const aiChatClose = document.getElementById('aiChatClose');
  const aiChatBody = document.getElementById('aiChatBody');
  const aiChatForm = document.getElementById('aiChatForm');
  const aiChatInput = document.getElementById('aiChatInput');
  let aiOpened = false;

  function addChatMessage(text, sender = 'bot'){
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.textContent = text;
    aiChatBody.appendChild(msg);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
  }

  function showTyping(){
    const t = document.createElement('div');
    t.className = 'chat-msg bot typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    aiChatBody.appendChild(t);
    aiChatBody.scrollTop = aiChatBody.scrollHeight;
    return t;
  }

  /**
   * getAIResponse — demo response engine.
   * To connect a real AI API: replace this function's body with a call to
   * your backend/LLM endpoint, e.g.:
   *   async function getAIResponse(userText) {
   *     const res = await fetch('/api/assistant', { method:'POST', body: JSON.stringify({ message: userText }) });
   *     const data = await res.json();
   *     return data.reply;
   *   }
   * Keep the calling code (sendAIMessage) unchanged — it already awaits this function.
   */
  function getAIResponse(userText){
    const q = userText.toLowerCase();
    if (q.includes('gift')) return "For gifting, the Riviera Beads ($98) and Solstice Cuff ($210) are our most-returned-for pieces — both arrive in our oak keepsake box, ready to give as-is.";
    if (q.includes('size') || q.includes('fit')) return "Most of our chains fit 6\u20138 inch wrists and include a 1-inch adjuster. For cuffs, they're designed to flex open slightly — let me know the wrist size and I can point you to the right one.";
    if (q.includes('ship')) return "Orders dispatch within 24 hours and arrive in 2\u20135 business days via tracked courier. Shipping is complimentary on every order.";
    if (q.includes('return')) return "You have 30 days to return or exchange any piece, free of charge, as long as it's unworn with tags attached.";
    if (q.includes('material') || q.includes('gold') || q.includes('silver')) return "Most pieces are 18k gold vermeil over recycled sterling silver — plated thick enough for daily wear. Solid 14k gold is available on request for select styles.";
    if (q.includes('best') || q.includes('popular')) return "Right now the Meridian Chain and Aurora Diamond Line are our top sellers — both hold up well to daily wear.";
    if (q.includes('price') || q.includes('cost') || q.includes('cheap') || q.includes('budget')) return "Pieces range from $88 for the Linen Knot Beads up to $450 for the Halo Diamond Tennis. What's your rough budget? I can narrow it down.";
    if (q.includes('classic') || q.includes('bold') || q.includes('cuff')) return "If you like bold, the Terra Cuff or Solstice Cuff will stand out. For something classic and quieter day-to-day, the Meridian Chain is timeless.";
    return "Good question — I can help with sizing, materials, gifting, or finding a specific style. What's the occasion, or who's it for?";
  }

  const QUICK_REPLIES = {
    find: "I'm looking for a new bracelet, can you help me find one?",
    bestsellers: "What are your best sellers right now?",
    gift: "I need a gift recommendation.",
    size: "How do I know what size to get?",
    shipping: "How long does shipping take?"
  };

  function sendAIMessage(text){
    if (!text.trim()) return;
    addChatMessage(text, 'user');
    aiChatInput.value = '';
    const typingEl = showTyping();
    setTimeout(() => {
      typingEl.remove();
      addChatMessage(getAIResponse(text), 'bot');
    }, 750 + Math.random()*500);
  }

  aiFab.addEventListener('click', () => {
    aiChat.classList.add('is-active');
    if (!aiOpened) {
      aiOpened = true;
      addChatMessage("Hi! I'm your personal bracelet stylist. Looking for something classic, bold, or perfect for a gift?", 'bot');
    }
  });
  aiChatClose.addEventListener('click', () => aiChat.classList.remove('is-active'));
  document.getElementById('aiChatQuick').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-q]');
    if (btn) sendAIMessage(QUICK_REPLIES[btn.dataset.q]);
  });
  aiChatForm.addEventListener('submit', (e) => { e.preventDefault(); sendAIMessage(aiChatInput.value); });

  /* ------------------------------------------------------------------
     MISC
     ------------------------------------------------------------------ */
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth-scroll for in-page anchors (accounts for fixed header)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        closeAllPanels();
        const offset = target.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

  // Kick off scroll-reveal observation now that dynamic content exists
  observeReveals();

});
