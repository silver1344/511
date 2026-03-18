<template>
  <div class="blueprint-wrapper">
    <!-- ── 히어로: 프로젝트 표지 ── -->
    <section class="hero-blueprint">
      <div class="blueprint-grid"></div>
      <div class="hero-border">
        <div class="corner tl"></div>
        <div class="corner tr"></div>
        <div class="corner bl"></div>
        <div class="corner br"></div>

        <!-- 송전탑 SVG -->
        <div class="tower-bg" aria-hidden="true">
          <svg viewBox="0 0 200 400" class="tower-svg">
            <line x1="100" y1="0" x2="100" y2="400" stroke="currentColor" stroke-width="2"/>
            <line x1="70" y1="60" x2="130" y2="60" stroke="currentColor" stroke-width="1.5"/>
            <line x1="60" y1="120" x2="140" y2="120" stroke="currentColor" stroke-width="1.5"/>
            <line x1="50" y1="200" x2="150" y2="200" stroke="currentColor" stroke-width="1.5"/>
            <line x1="100" y1="60" x2="70" y2="120" stroke="currentColor" stroke-width="1"/>
            <line x1="100" y1="60" x2="130" y2="120" stroke="currentColor" stroke-width="1"/>
            <line x1="70" y1="120" x2="60" y2="200" stroke="currentColor" stroke-width="1"/>
            <line x1="130" y1="120" x2="140" y2="200" stroke="currentColor" stroke-width="1"/>
            <line x1="60" y1="200" x2="40" y2="400" stroke="currentColor" stroke-width="1.5"/>
            <line x1="140" y1="200" x2="160" y2="400" stroke="currentColor" stroke-width="1.5"/>
            <!-- 전선 -->
            <path d="M0,55 Q35,70 70,60" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,3"/>
            <path d="M130,60 Q165,50 200,65" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,3"/>
            <path d="M0,115 Q30,130 60,120" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,3"/>
            <path d="M140,120 Q170,110 200,125" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,3"/>
            <!-- 절연체 -->
            <circle cx="70" cy="60" r="3" fill="currentColor"/>
            <circle cx="130" cy="60" r="3" fill="currentColor"/>
            <circle cx="60" cy="120" r="3" fill="currentColor"/>
            <circle cx="140" cy="120" r="3" fill="currentColor"/>
          </svg>
        </div>

        <div class="hero-content">
          <div class="project-header">
            <span class="doc-number">DOC. NO. KEPCO-W-2026-0517</span>
            <span class="doc-rev">Rev. 01</span>
          </div>

          <div class="project-title-block">
            <p class="project-label">— PROJECT —</p>
            <h1 class="project-name">WEDDING</h1>
          </div>

          <div class="couple-spec">
            <div class="spec-row">
              <span class="spec-label">GROOM</span>
              <span class="spec-dots"></span>
              <span class="spec-value">김 지 환</span>
            </div>
            <div class="circuit-line">
              <span class="node"></span>
              <span class="line"></span>
              <span class="heart-node">⚡</span>
              <span class="line"></span>
              <span class="node"></span>
            </div>
            <div class="spec-row">
              <span class="spec-label">BRIDE</span>
              <span class="spec-dots"></span>
              <span class="spec-value">이 택 호</span>
            </div>
          </div>

          <div class="project-info-block">
            <div class="info-row">
              <span class="info-label">DATE</span>
              <span class="info-value">2026. 05. 17. (SUN) 13:00</span>
            </div>
            <div class="info-row">
              <span class="info-label">SITE</span>
              <span class="info-value">그랜드 컨벤션홀 3F</span>
            </div>
          </div>

          <div class="approved-stamp">
            <span>APPROVED</span>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span class="scroll-text">SCROLL</span>
      </div>
    </section>

    <!-- ── 프로젝트 개요 (인사말) ── -->
    <section class="section-block reveal">
      <div class="section-number">01</div>
      <h2 class="section-heading">프로젝트 개요<span class="heading-en">PROJECT OVERVIEW</span></h2>
      <div class="section-line"></div>

      <div class="greeting-content">
        <p class="greeting-text">
          서로 다른 회로를 달리던 두 전류가<br>
          하나의 계통으로 연결되려 합니다.<br><br>
          같은 현장에서 만나<br>
          같은 꿈을 설계하게 된 두 사람,<br>
          이제 인생이라는 큰 프로젝트를<br>
          함께 시공해 나가겠습니다.<br><br>
          부디 오셔서 축하해 주시면<br>
          큰 힘이 되겠습니다.
        </p>

        <div class="parents-block">
          <div class="parent-row">
            <span class="parent-side">🔧 신랑측</span>
            <span class="parent-detail"><b>김완섭 · 김준형</b>의 장남 <b>지환</b></span>
          </div>
          <div class="parent-row">
            <span class="parent-side">🔧 신부측</span>
            <span class="parent-detail"><b>박유진 · 방성일</b>의 장녀 <b>택호</b></span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── 공정 일정 (캘린더) ── -->
    <section class="section-block dark reveal">
      <div class="section-number">02</div>
      <h2 class="section-heading">공정 일정<span class="heading-en">PROJECT SCHEDULE</span></h2>
      <div class="section-line light"></div>

      <div class="calendar">
        <div class="cal-title">2026 / MAY</div>
        <div class="cal-header">
          <span class="cal-sun">SUN</span>
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span class="cal-sat">SAT</span>
        </div>
        <div class="cal-body">
          <span class="cal-empty"></span>
          <span class="cal-empty"></span>
          <span class="cal-empty"></span>
          <span class="cal-empty"></span>
          <span class="cal-empty"></span>
          <span>1</span>
          <span class="cal-sat">2</span>
          <span class="cal-sun">3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span class="cal-sat">9</span>
          <span class="cal-sun">10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span class="cal-sat">16</span>
          <span class="cal-sun cal-highlight">17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span class="cal-sat">23</span>
          <span class="cal-sun">24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span class="cal-sat">30</span>
          <span class="cal-sun">31</span>
        </div>
      </div>

      <div class="dday-block">
        <span class="dday-label">D-DAY COUNTDOWN</span>
        <span class="dday-value">{{ dday }}</span>
      </div>
    </section>

    <!-- ── 현장 기록 (갤러리) ── -->
    <section class="section-block reveal">
      <div class="section-number">03</div>
      <h2 class="section-heading">현장 기록<span class="heading-en">SITE DOCUMENTATION</span></h2>
      <div class="section-line"></div>

      <div class="gallery-grid">
        <div
          v-for="(photo, i) in galleryPhotos"
          :key="i"
          class="gallery-item reveal-item"
          :style="{ '--d': i }"
          @click="openLightbox(i)"
        >
          <div class="photo-placeholder" :style="{ background: photo.bg }">
            <span class="photo-label">{{ photo.label }}</span>
          </div>
          <div class="photo-caption">{{ photo.caption }}</div>
        </div>
      </div>
    </section>

    <!-- 라이트박스 -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-inner" @click.stop>
          <button class="lb-close" @click="closeLightbox">✕</button>
          <button class="lb-prev" @click="prevPhoto">‹</button>
          <div class="lb-photo" :style="{ background: galleryPhotos[lightboxIndex].bg }">
            <span class="photo-label">{{ galleryPhotos[lightboxIndex].label }}</span>
          </div>
          <button class="lb-next" @click="nextPhoto">›</button>
          <div class="lb-counter">{{ lightboxIndex + 1 }} / {{ galleryPhotos.length }}</div>
        </div>
      </div>
    </Teleport>

    <!-- ── 현장 위치도 (오시는 길) ── -->
    <section class="section-block dark reveal">
      <div class="section-number">04</div>
      <h2 class="section-heading">현장 위치도<span class="heading-en">SITE LOCATION</span></h2>
      <div class="section-line light"></div>

      <div class="venue-card">
        <div class="venue-main">
          <h3>그랜드 컨벤션홀</h3>
          <span class="venue-badge">3F 루체홀</span>
        </div>
        <p class="venue-address">서울특별시 강남구 테헤란로 123</p>
        <p class="venue-tel">TEL. 02-1234-5678</p>
      </div>

      <div class="map-container">
        <div class="map-placeholder">
          <div class="map-crosshair">
            <span class="ch-h"></span>
            <span class="ch-v"></span>
            <span class="ch-dot"></span>
          </div>
          <p>지도 API 연동 예정</p>
        </div>
      </div>

      <div class="transport-grid">
        <div class="transport-card">
          <span class="t-icon">🚇</span>
          <strong>지하철</strong>
          <p>2호선 강남역<br>3번 출구 도보 5분</p>
        </div>
        <div class="transport-card">
          <span class="t-icon">🚌</span>
          <strong>버스</strong>
          <p>간선 140, 144<br>지선 4412</p>
        </div>
        <div class="transport-card">
          <span class="t-icon">🚗</span>
          <strong>주차</strong>
          <p>지하주차장<br>2시간 무료</p>
        </div>
      </div>

      <div class="map-buttons">
        <a href="https://map.naver.com/" target="_blank" class="map-btn naver">
          <span class="btn-icon">N</span> 네이버 지도
        </a>
        <a href="https://map.kakao.com/" target="_blank" class="map-btn kakao">
          <span class="btn-icon">K</span> 카카오맵
        </a>
        <a href="https://www.tmap.co.kr/" target="_blank" class="map-btn tmap">
          <span class="btn-icon">T</span> 티맵
        </a>
      </div>
    </section>

    <!-- ── 공급 계획 (식사 안내) ── -->
    <section class="section-block reveal">
      <div class="section-number">05</div>
      <h2 class="section-heading">식사 안내<span class="heading-en">MEAL SERVICE</span></h2>
      <div class="section-line"></div>

      <div class="spec-table">
        <div class="spec-table-row">
          <span class="st-label">장 소</span>
          <span class="st-value">3층 연회홀</span>
        </div>
        <div class="spec-table-row">
          <span class="st-label">시 간</span>
          <span class="st-value">12:30 ~ 14:30</span>
        </div>
        <div class="spec-table-row">
          <span class="st-label">비 고</span>
          <span class="st-value">음료 · 주류 무제한 제공</span>
        </div>
      </div>
    </section>

    <!-- ── 정산 계좌 (축의금) ── -->
    <section class="section-block dark reveal">
      <div class="section-number">06</div>
      <h2 class="section-heading">마음 전하실 곳<span class="heading-en">ACCOUNT INFO</span></h2>
      <div class="section-line light"></div>
      <p class="account-desc">축하의 마음을 전해주세요</p>

      <div class="account-group">
        <button class="account-toggle" @click="toggleAccount('groom')">
          <span>⚡ 신랑측 계좌번호</span>
          <span class="toggle-arrow" :class="{ open: accountOpen.groom }">▼</span>
        </button>
        <Transition name="slide">
          <div v-if="accountOpen.groom" class="account-list">
            <div class="account-item">
              <span class="account-label">신랑 김지환</span>
              <span class="account-number">국민은행 000-000-00-000000</span>
              <button class="copy-btn" @click="copyAccount('국민은행 000-000-00-000000')">COPY</button>
            </div>
            <div class="account-item">
              <span class="account-label">부 김완섭</span>
              <span class="account-number">신한은행 000-000-000000</span>
              <button class="copy-btn" @click="copyAccount('신한은행 000-000-000000')">COPY</button>
            </div>
            <div class="account-item">
              <span class="account-label">모 김준형</span>
              <span class="account-number">우리은행 0000-000-000000</span>
              <button class="copy-btn" @click="copyAccount('우리은행 0000-000-000000')">COPY</button>
            </div>
          </div>
        </Transition>
      </div>

      <div class="account-group">
        <button class="account-toggle" @click="toggleAccount('bride')">
          <span>⚡ 신부측 계좌번호</span>
          <span class="toggle-arrow" :class="{ open: accountOpen.bride }">▼</span>
        </button>
        <Transition name="slide">
          <div v-if="accountOpen.bride" class="account-list">
            <div class="account-item">
              <span class="account-label">신부 이택호</span>
              <span class="account-number">카카오뱅크 3333-00-0000000</span>
              <button class="copy-btn" @click="copyAccount('카카오뱅크 3333-00-0000000')">COPY</button>
            </div>
            <div class="account-item">
              <span class="account-label">부 박유진</span>
              <span class="account-number">하나은행 000-000000-00000</span>
              <button class="copy-btn" @click="copyAccount('하나은행 000-000000-00000')">COPY</button>
            </div>
            <div class="account-item">
              <span class="account-label">모 방성일</span>
              <span class="account-number">농협 000-0000-0000-00</span>
              <button class="copy-btn" @click="copyAccount('농협 000-0000-0000-00')">COPY</button>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- ── 공지 ── -->
    <section class="notice-block reveal">
      <div class="notice-inner">
        <span class="notice-icon">⚠️</span>
        <p>화환은 정중히 사양합니다.<br>보내주시는 마음만으로도 충분한 전력이 됩니다.</p>
      </div>
    </section>

    <!-- ── 푸터 ── -->
    <footer class="blueprint-footer">
      <div class="footer-circuit">
        <span class="f-node"></span>
        <span class="f-line"></span>
        <span class="f-heart">⚡</span>
        <span class="f-line"></span>
        <span class="f-node"></span>
      </div>
      <p class="footer-names">김지환 & 이택호</p>
      <p class="footer-date">2026. 05. 17</p>
      <p class="footer-company">Powered by KEPCO E&C</p>
    </footer>

    <!-- 토스트 -->
    <Transition name="toast">
      <div v-if="toastVisible" class="toast-msg">{{ toastMessage }}</div>
    </Transition>
  </div>
</template>

<script setup>
useHead({
  title: '지환 ♥ 택호 결혼합니다',
  meta: [
    { name: 'description', content: '김지환 ♥ 이택호 결혼식에 초대합니다' },
    { property: 'og:title', content: '지환 ♥ 택호 결혼합니다' },
    { property: 'og:description', content: '2026년 5월 17일 일요일 오후 1시 | 그랜드 컨벤션홀' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://silver1344.github.io/511/og-image.svg' },
    { property: 'og:url', content: 'https://silver1344.github.io/511/' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})

const dday = computed(() => {
  const wedding = new Date('2026-05-17T13:00:00+09:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const weddingDay = new Date(wedding)
  weddingDay.setHours(0, 0, 0, 0)
  const diff = Math.ceil((weddingDay - today) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'D-DAY 🎉'
  if (diff > 0) return `D-${diff}`
  return '송전 완료 ⚡'
})

const galleryPhotos = [
  { label: 'PHOTO 01', caption: '첫 만남의 현장', bg: 'linear-gradient(135deg, #1a2744 0%, #0d4f6e 100%)' },
  { label: 'PHOTO 02', caption: '함께한 현장답사', bg: 'linear-gradient(135deg, #0d1b2a 0%, #1b4965 100%)' },
  { label: 'PHOTO 03', caption: '야근의 추억', bg: 'linear-gradient(135deg, #162a40 0%, #2c5f7c 100%)' },
  { label: 'PHOTO 04', caption: '프로젝트 완료 기념', bg: 'linear-gradient(135deg, #1a3045 0%, #3a7ca5 100%)' },
  { label: 'PHOTO 05', caption: '설계실 데이트', bg: 'linear-gradient(135deg, #0f2235 0%, #1b6089 100%)' },
  { label: 'PHOTO 06', caption: '프로포즈', bg: 'linear-gradient(135deg, #132e47 0%, #2980b9 100%)' },
]

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const openLightbox = (i) => { lightboxIndex.value = i; lightboxOpen.value = true }
const closeLightbox = () => { lightboxOpen.value = false }
const prevPhoto = () => { lightboxIndex.value = (lightboxIndex.value - 1 + galleryPhotos.length) % galleryPhotos.length }
const nextPhoto = () => { lightboxIndex.value = (lightboxIndex.value + 1) % galleryPhotos.length }

const accountOpen = reactive({ groom: false, bride: false })
const toggleAccount = (side) => { accountOpen[side] = !accountOpen[side] }

const toastVisible = ref(false)
const toastMessage = ref('')
const showToast = (msg) => {
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => { toastVisible.value = false }, 2000)
}

const copyAccount = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast('계좌번호가 복사되었습니다')
  } catch {
    showToast('복사에 실패했습니다')
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document
    .querySelectorAll('.reveal, .reveal-item')
    .forEach((el) => observer.observe(el))
})
</script>
