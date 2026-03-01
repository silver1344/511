<template>
  <div class="page-wrapper">
    <div class="container">

      <!-- Header -->
      <header class="header">
        <div class="bus-badge">
          <div class="bus-number">511</div>
        </div>
        <div class="band-text">B A N D</div>
        <p class="header-tagline">인하대를 달리던 511번처럼, 다시 한번 달립니다</p>
      </header>

      <!-- Route Divider -->
      <div class="route-divider">
        <span class="stop"></span>
        <span class="track"></span>
        <span class="stop current"></span>
        <span class="track"></span>
        <span class="stop"></span>
      </div>

      <!-- Event Info -->
      <section class="event-info">
        <div class="destination-board">
          <span class="dest-tag">FINAL STOP</span>
          <div class="dest-name">공간 비틀즈</div>
        </div>
        <div class="datetime-row">
          <div class="date">2025년 5월 9일 (토)</div>
          <div class="time">오후 6시</div>
        </div>
      </section>

      <!-- Members -->
      <section class="members">
        <div class="members-header">
          <span class="tag-dot"></span>
          <h3>탑 승 멤 버</h3>
          <span class="tag-dot"></span>
        </div>
        <div class="members-grid">
          <div class="member-item">이도율</div>
          <div class="member-item">권경하</div>
          <div class="member-item">변세미</div>
          <div class="member-item">이재호</div>
          <div class="member-item">최정은</div>
        </div>
      </section>

      <!-- Setlist -->
      <section class="setlist">
        <h3 class="setlist-title">🎵 SET LIST</h3>

        <div class="setlist-part">
          <h4 class="part-title">1 부</h4>
          <div class="setlist-item">1. Wave To Earth — 사랑으로</div>
          <div class="setlist-item">2. Nerd Connection — 그대만 있다면</div>
          <div class="setlist-item">3. DK — Go!</div>
          <div class="setlist-item">4. 10cm — 너에게 닿기를</div>
        </div>

        <div class="break-time">— 10분 쉬는 시간 —</div>

        <div class="setlist-part">
          <h4 class="part-title">2 부</h4>
          <div class="setlist-item">5. DAY6 — Welcome to the Show</div>
          <div class="setlist-item">6. Official髭男dism — Pretender</div>
          <div class="setlist-item">7. DAY6 — 그녀가 웃었다</div>
          <div class="setlist-item">8. 전영호 — Butterfly</div>
        </div>
      </section>

      <!-- Location -->
      <section class="location">
        <h3 class="location-title">📍 오시는 길</h3>
        <div class="venue-detail">
          <div class="venue-name">공간 비틀즈</div>
          <div class="venue-address">서울특별시 마포구 와우산로29나길 18-6</div>
          <div class="venue-info">지하철 2호선 홍익대입구역 7번 출구 도보 5분</div>
        </div>

        <div class="map-container">
          <img
            src="/assets/images/nav.png"
            alt="공간 비틀즈 약도"
            class="map-image"
          />
        </div>

        <div class="map-link">
          <a
            href="https://map.naver.com/p/search/%EA%B3%B5%EA%B0%84%20%EB%B9%84%ED%8B%80%EC%A6%88/place/1292176455?c=15.00,0,0,0,dh"
            target="_blank"
            class="naver-map-btn"
          >
            네이버 지도에서 크게 보기
          </a>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
useHead({
  title: "511 BAND — 공연 초대장",
  meta: [
    { name: "description", content: "511 밴드 공연 초대장" },
    { property: "og:title", content: "511 BAND 공연 초대장" },
    { property: "og:description", content: "511 밴드 공연 초대장" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: "511 BAND 공연 초대장" },
    { name: "twitter:description", content: "511 밴드 공연 초대장" },
  ],
});
</script>
