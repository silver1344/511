<template>
  <div class="wedding-wrapper">
    <!-- ── 히어로 섹션 ── -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-label">W E D D I N G</p>
        <h1 class="hero-names">
          <span class="groom-name">지환</span>
          <span class="heart-icon">♥</span>
          <span class="bride-name">형걸</span>
        </h1>
        <p class="hero-date">2026. 05. 17. SUN PM 1:00</p>
        <p class="hero-venue">그랜드 컨벤션홀 3층 루체홀</p>
      </div>
      <div class="scroll-indicator">
        <span></span>
      </div>
    </section>

    <!-- ── 인사말 ── -->
    <section class="greeting reveal">
      <div class="section-icon">💌</div>
      <h2 class="section-title">초대합니다</h2>
      <div class="greeting-divider"></div>
      <p class="greeting-text">
        서로 다른 길을 걸어온 두 사람이<br>
        이제 같은 길을 함께 걸어가려 합니다.<br><br>
        따스한 봄날,<br>
        저희 두 사람이 사랑으로 하나 되는 날<br>
        귀한 걸음 하시어<br>
        축복해 주시면 감사하겠습니다.
      </p>
      <div class="parents-info">
        <p class="parent-line">
          <span class="parent-role">신랑측</span>
          <span class="parent-names">김완섭 · 김준형</span>의 장남
          <span class="child-name">지환</span>
        </p>
        <p class="parent-line">
          <span class="parent-role">신부측</span>
          <span class="parent-names">박유진 · 방성일</span>의 차녀
          <span class="child-name">형걸</span>
        </p>
      </div>
    </section>

    <!-- ── 캘린더 ── -->
    <section class="calendar-section reveal">
      <h2 class="section-title">2026년 5월</h2>
      <div class="calendar">
        <div class="cal-header">
          <span class="cal-sun">일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span class="cal-sat">토</span>
        </div>
        <div class="cal-body">
          <!-- 5월 1일 = 금요일 -->
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
      <div class="dday-info">
        <p>김지환 <span class="heart-sm">♥</span> 이형걸의 결혼식이
          <strong>{{ dday }}</strong>
        </p>
      </div>
    </section>

    <!-- ── 갤러리 ── -->
    <section class="gallery-section reveal">
      <div class="section-icon">📸</div>
      <h2 class="section-title">우리의 이야기</h2>
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

    <!-- ── 오시는 길 ── -->
    <section class="location-section reveal">
      <div class="section-icon">📍</div>
      <h2 class="section-title">오시는 길</h2>
      <div class="venue-card">
        <h3 class="venue-name">그랜드 컨벤션홀</h3>
        <p class="venue-floor">3층 루체홀</p>
        <p class="venue-address">서울특별시 강남구 테헤란로 123</p>
        <p class="venue-tel">TEL. 02-1234-5678</p>
      </div>

      <div class="map-container">
        <div class="map-placeholder">
          <span>🗺️ 지도 영역</span>
          <p>실제 지도 API 연동 예정</p>
        </div>
      </div>

      <div class="transport-info">
        <div class="transport-item">
          <span class="transport-icon">🚇</span>
          <div>
            <strong>지하철</strong>
            <p>2호선 강남역 3번 출구 도보 5분</p>
          </div>
        </div>
        <div class="transport-item">
          <span class="transport-icon">🚌</span>
          <div>
            <strong>버스</strong>
            <p>간선 140, 144, 145 / 지선 4412</p>
          </div>
        </div>
        <div class="transport-item">
          <span class="transport-icon">🚗</span>
          <div>
            <strong>주차</strong>
            <p>건물 내 지하주차장 2시간 무료</p>
          </div>
        </div>
      </div>

      <div class="map-buttons">
        <a href="https://map.naver.com/" target="_blank" class="map-btn naver">네이버 지도</a>
        <a href="https://map.kakao.com/" target="_blank" class="map-btn kakao">카카오맵</a>
        <a href="https://www.tmap.co.kr/" target="_blank" class="map-btn tmap">티맵</a>
      </div>
    </section>

    <!-- ── 연회 안내 ── -->
    <section class="info-section reveal">
      <div class="section-icon">🍽️</div>
      <h2 class="section-title">식사 안내</h2>
      <div class="info-card">
        <p>연회장 : 3층 연회홀</p>
        <p>이용시간 : 12시 30분 ~ 14시 30분</p>
        <p>음료 · 주류 무제한 제공</p>
      </div>
    </section>

    <!-- ── 축의금 계좌 ── -->
    <section class="account-section reveal">
      <div class="section-icon">💰</div>
      <h2 class="section-title">마음 전하실 곳</h2>
      <p class="account-desc">축하의 마음을 전해주세요</p>

      <div class="account-group">
        <button class="account-toggle" @click="toggleAccount('groom')">
          <span>신랑측 계좌번호</span>
          <span class="toggle-arrow" :class="{ open: accountOpen.groom }">▼</span>
        </button>
        <Transition name="slide">
          <div v-if="accountOpen.groom" class="account-list">
            <div class="account-item">
              <span class="account-label">신랑 김지환</span>
              <span class="account-number">국민은행 000-000-00-000000</span>
              <button class="copy-btn" @click="copyAccount('국민은행 000-000-00-000000')">복사</button>
            </div>
            <div class="account-item">
              <span class="account-label">부 김완섭</span>
              <span class="account-number">신한은행 000-000-000000</span>
              <button class="copy-btn" @click="copyAccount('신한은행 000-000-000000')">복사</button>
            </div>
            <div class="account-item">
              <span class="account-label">모 김준형</span>
              <span class="account-number">우리은행 0000-000-000000</span>
              <button class="copy-btn" @click="copyAccount('우리은행 0000-000-000000')">복사</button>
            </div>
          </div>
        </Transition>
      </div>

      <div class="account-group">
        <button class="account-toggle" @click="toggleAccount('bride')">
          <span>신부측 계좌번호</span>
          <span class="toggle-arrow" :class="{ open: accountOpen.bride }">▼</span>
        </button>
        <Transition name="slide">
          <div v-if="accountOpen.bride" class="account-list">
            <div class="account-item">
              <span class="account-label">신부 이형걸</span>
              <span class="account-number">카카오뱅크 3333-00-0000000</span>
              <button class="copy-btn" @click="copyAccount('카카오뱅크 3333-00-0000000')">복사</button>
            </div>
            <div class="account-item">
              <span class="account-label">부 박유진</span>
              <span class="account-number">하나은행 000-000000-00000</span>
              <button class="copy-btn" @click="copyAccount('하나은행 000-000000-00000')">복사</button>
            </div>
            <div class="account-item">
              <span class="account-label">모 방성일</span>
              <span class="account-number">농협 000-0000-0000-00</span>
              <button class="copy-btn" @click="copyAccount('농협 000-0000-0000-00')">복사</button>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- ── 참석 여부 ── -->
    <section class="rsvp-section reveal">
      <div class="section-icon">✉️</div>
      <h2 class="section-title">참석 여부 전달</h2>
      <p class="rsvp-desc">
        참석 여부를 미리 알려주시면<br>
        준비하는 데 큰 도움이 됩니다.
      </p>
      <div class="rsvp-form">
        <div class="rsvp-field">
          <label>성함</label>
          <input v-model="rsvp.name" type="text" placeholder="성함을 입력해주세요" />
        </div>
        <div class="rsvp-field">
          <label>참석 여부</label>
          <div class="rsvp-radio-group">
            <label class="rsvp-radio">
              <input v-model="rsvp.attending" type="radio" value="yes" />
              <span>참석</span>
            </label>
            <label class="rsvp-radio">
              <input v-model="rsvp.attending" type="radio" value="no" />
              <span>불참</span>
            </label>
          </div>
        </div>
        <div class="rsvp-field">
          <label>식사 인원</label>
          <div class="rsvp-counter">
            <button @click="rsvp.guests = Math.max(1, rsvp.guests - 1)">−</button>
            <span>{{ rsvp.guests }}명</span>
            <button @click="rsvp.guests = Math.min(10, rsvp.guests + 1)">+</button>
          </div>
        </div>
        <button class="rsvp-submit" @click="submitRsvp">전달하기</button>
      </div>
    </section>

    <!-- ── 화환 안내 ── -->
    <section class="notice-section reveal">
      <p class="notice-text">
        화환은 정중히 사양합니다.<br>
        보내주시는 마음만으로도 큰 축복이 됩니다.
      </p>
    </section>

    <!-- ── 푸터 ── -->
    <footer class="wedding-footer">
      <p class="footer-names">지환 ♥ 형걸</p>
      <p class="footer-date">2026. 05. 17</p>
    </footer>

    <!-- 토스트 메시지 -->
    <Transition name="toast">
      <div v-if="toastVisible" class="toast-msg">{{ toastMessage }}</div>
    </Transition>
  </div>
</template>

<script setup>
const dday = computed(() => {
  const wedding = new Date('2026-05-17T13:00:00+09:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const weddingDay = new Date(wedding)
  weddingDay.setHours(0, 0, 0, 0)
  const diff = Math.ceil((weddingDay - today) / (1000 * 60 * 60 * 24))
  if (diff === 0) return '바로 오늘입니다!'
  if (diff > 0) return `${diff}일 남았습니다`
  return '행복하게 잘 살고 있습니다 💕'
})

const galleryPhotos = [
  { label: 'PHOTO 1', bg: 'linear-gradient(135deg, #e8d5b7 0%, #c9a96e 100%)' },
  { label: 'PHOTO 2', bg: 'linear-gradient(135deg, #d5c4a1 0%, #b8956a 100%)' },
  { label: 'PHOTO 3', bg: 'linear-gradient(135deg, #f0e6d3 0%, #d4b896 100%)' },
  { label: 'PHOTO 4', bg: 'linear-gradient(135deg, #e2d1b8 0%, #c4a882 100%)' },
  { label: 'PHOTO 5', bg: 'linear-gradient(135deg, #ddd0ba 0%, #bfa277 100%)' },
  { label: 'PHOTO 6', bg: 'linear-gradient(135deg, #ecdcc6 0%, #d1b58f 100%)' },
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

const rsvp = reactive({ name: '', attending: 'yes', guests: 1 })
const submitRsvp = () => {
  if (!rsvp.name.trim()) {
    showToast('성함을 입력해주세요')
    return
  }
  showToast('참석 여부가 전달되었습니다. 감사합니다!')
  rsvp.name = ''
  rsvp.attending = 'yes'
  rsvp.guests = 1
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
