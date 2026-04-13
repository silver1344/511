<template>
  <div class="page-wrapper">
    <div class="bus-container">
      <div class="bus-frame">
        <!-- ── 버스 정면 ── -->
        <div class="bus-front">
          <!-- 행선지 보드 -->
          <div class="dest-board">
            <div class="route-badge">511</div>
            <div class="dest-info">
              <div class="dest-label">FINAL STOP</div>
              <div class="dest-name">공간 비틀즈</div>
            </div>
          </div>

          <!-- 앞유리 -->
          <div class="windshield">
            <div class="windshield-content">
              <div class="ws-date">2026. 5. 9 (토)</div>
              <div class="ws-time">오후 7시</div>
            </div>
            <div class="wiper wiper-l"></div>
            <div class="wiper wiper-r"></div>
          </div>

          <!-- 헤드라이트 + 그릴 -->
          <div class="front-row">
            <div class="headlight"></div>
            <div class="front-grill"></div>
            <div class="headlight"></div>
          </div>
        </div>
        <!-- ── 버스 정면 끝 ── -->

        <!-- ── 버스 내부 (콘텐츠) ── -->
        <div class="bus-body">
          <!-- 음표 파티클 -->
          <div class="music-particles" aria-hidden="true">
            <span class="note">♩</span>
            <span class="note">♪</span>
            <span class="note">♫</span>
            <span class="note">♬</span>
            <span class="note">♩</span>
            <span class="note">♪</span>
            <span class="note">♫</span>
          </div>

          <!-- 기관사 -->
          <section class="members reveal">
            <div class="members-header">
              <span class="tag-dot"></span>
              <h3>기 관 사</h3>
              <span class="tag-dot"></span>
            </div>
            <p class="members-invite">511 밴드가 여러분의 탑승을 기다립니다</p>
            <div class="members-grid">
              <div class="member-item reveal-item" style="--d:0">🎹 권경하</div>
              <div class="member-item reveal-item" style="--d:1">🎸 이도율</div>
              <div class="member-item reveal-item" style="--d:2">🎸 변세미</div>
              <div class="member-item reveal-item" style="--d:3">🎸 이재호</div>
              <div class="member-item reveal-item" style="--d:4">🥁 최정은</div>
            </div>
          </section>

          <div class="section-divider"></div>

          <!-- 셋리스트 -->
          <section class="setlist reveal">
            <h3 class="setlist-title">🎵 SET LIST</h3>

            <div class="setlist-part">
              <div class="setlist-item reveal-item" style="--d:0">
                <span class="track-num">1</span>
                <span class="track-text">한로로 — 사랑하게 될거야</span>
              </div>
              <div class="setlist-item reveal-item" style="--d:1">
                <span class="track-num">2</span>
                <span class="track-text">Nerd Connection — 그대만 있다면</span>
              </div>
              <div class="setlist-item reveal-item" style="--d:2">
                <span class="track-num">3</span>
                <span class="track-text">Honne — Free Love</span>
              </div>
              <div class="setlist-item reveal-item" style="--d:3">
                <span class="track-num">4</span>
                <span class="track-text">DAY6 — 그녀가 웃었다</span>
              </div>
              <div class="setlist-item reveal-item" style="--d:4">
                <span class="track-num">5</span>
                <span class="track-text">Official髭男dism — Pretender</span>
              </div>
              <div class="setlist-item reveal-item" style="--d:5">
                <span class="track-num">6</span>
                <span class="track-text">전영호 — Butterfly</span>
              </div>
            </div>
          </section>

          <div class="section-divider"></div>

          <!-- 오시는 길 -->
          <section class="location reveal">
            <h3 class="location-title">📍 오시는 길</h3>
            <div class="venue-detail">
              <div class="venue-name">공간 비틀즈</div>
              <div class="venue-address">
                서울특별시 마포구 와우산로29나길 18-6
              </div>
              <div class="venue-info">
                지하철 2호선 홍익대입구역 7번 출구 도보 5분
              </div>
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
        <!-- ── 버스 내부 끝 ── -->

        <!-- ── 버스 하단 (번호판) ── -->
        <div class="bus-bottom">
          <div class="license-plate">인천 가 0118</div>
        </div>
      </div>
      <!-- ── bus-frame 끝 ── -->
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

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document
    .querySelectorAll(".reveal, .reveal-item")
    .forEach((el) => observer.observe(el));
});
</script>
