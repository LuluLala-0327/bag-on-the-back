/* 액션 게임 카메라 연출 경우의 수 — 콘텐츠 데이터
 * 원본: action_game_camera_cases.md (섹션 1~24) + 유튜브 레퍼런스 통합 인덱스
 * 구조: sections[] > groups[] > items[]  / groups 에 refs[] (레퍼런스 링크)
 */
window.CAMERA_DATA = {
  meta: {
    title: "ACTION CAMERA",
    subtitle: "액션 게임 카메라 연출 경우의 수",
    lead: "스페이스마린2를 메인 레퍼런스로 두되, 스텔라블레이드처럼 빠르고 스타일리쉬한 전투감을 목표로 하는 액션 게임 카메라 설계안. 무게감 있는 전장 카메라 + 빠른 1:1 스타일리쉬 액션 카메라 + 다수전 가독성 카메라의 혼합형으로 설계하는 것이 좋음."
  },
  sections: [
    {
      n: 1, title: "기본 플레이 카메라",
      groups: [
        {
          sub: "1.1 기본 추적 카메라",
          note: "플레이어의 일반 이동, 전투 대기, 필드 탐색에 사용되는 기본 카메라.",
          items: [
            { name: "오버 숄더 카메라", desc: "플레이어 오른쪽 또는 왼쪽 어깨 뒤에 카메라를 두는 방식. 스페이스마린2 계열의 총기 조준, 근접전, 전장 몰입에 적합." },
            { name: "센터 백 카메라", desc: "캐릭터의 등 뒤 정중앙에 카메라를 두는 방식. 캐릭터 실루엣, 이동 방향, 전방 적 배치가 잘 보임." },
            { name: "약간 높은 후방 카메라", desc: "캐릭터보다 살짝 높은 위치에서 내려다보는 방식. 다수 적 전투, 웨이브 전투, 공간 파악에 유리." },
            { name: "낮은 후방 카메라", desc: "카메라를 낮게 두어 캐릭터 체급과 무게감을 강조. 거대한 병사, 파워 아머, 육중한 무기 연출에 적합." },
            { name: "넓은 전장 카메라", desc: "FOV를 넓게 잡아 플레이어 주변의 적, 아군, 탄막, 폭발을 한 번에 보여줌. 다수전과 협동 플레이에 유리." },
            { name: "근접 밀착 카메라", desc: "캐릭터를 크게 잡아 타격감과 몰입감을 강화. 단점은 주변 가독성이 떨어질 수 있음." },
            { name: "동적 거리 조절 카메라", desc: "평상시에는 가까이, 전투 중에는 멀어지고, 보스전에서는 상황에 따라 줌 인/아웃되는 방식." },
            { name: "동적 높이 조절 카메라", desc: "실내에서는 낮고 가까운 카메라, 야외 전장에서는 높고 넓은 카메라로 전환." },
            { name: "좌우 숄더 스왑 카메라", desc: "플레이어가 엄폐, 조준, 코너 진입 시 어깨 방향을 바꾸는 카메라." },
            { name: "자동 장애물 회피 카메라", desc: "벽, 기둥, 큰 오브젝트가 카메라와 캐릭터 사이를 가릴 때 자동으로 위치를 보정." }
          ],
          refs: [
            { label: "Stellar Blade Demo Gameplay", url: "https://www.youtube.com/watch?v=H5EAG2Z8SDE" },
            { label: "Space Marine 2 Full Gameplay", url: "https://www.youtube.com/watch?v=nSPUTjCcNj0" },
            { label: "Space Marine 2 Great Camera Angles", url: "https://www.youtube.com/watch?v=U5LPVxqnpXU" },
            { label: "God of War Walkthrough Camera", url: "https://www.youtube.com/watch?v=_oOZG5-tqpA" },
            { label: "RE4 Remake Aim FOV", url: "https://www.youtube.com/watch?v=OG_zRWco4cQ" }
          ]
        }
      ]
    },
    {
      n: 2, title: "이동 카메라",
      groups: [
        {
          sub: "2.1 걷기 / 달리기 / 전력질주",
          items: [
            { name: "걷기 카메라", desc: "흔들림이 적고 안정적임. 캐릭터 감상과 공간 탐색에 적합." },
            { name: "달리기 카메라", desc: "카메라가 살짝 뒤로 빠지고 FOV가 약간 넓어짐." },
            { name: "전력질주 카메라", desc: "FOV 확장, 미세한 카메라 흔들림, 캐릭터 후방 트레일, 속도감을 강조." },
            { name: "방향 전환 카메라 래그", desc: "플레이어가 급회전할 때 카메라가 약간 늦게 따라오며 무게감을 줌." },
            { name: "빠른 방향 전환 카메라 스냅", desc: "스타일리쉬 액션 게임에 적합. 입력 방향에 맞춰 빠르게 카메라가 붙음." },
            { name: "추격형 런 카메라", desc: "캐릭터가 화면 중앙보다 약간 아래에 위치하고, 전방 공간을 크게 보여줌." },
            { name: "도주/탈출 카메라", desc: "뒤쪽에서 추격해오는 위협이 보이도록 카메라를 약간 뒤로 당기거나 측면으로 틀어줌." },
            { name: "전방 목표 유도 카메라", desc: "미션 목표, 문, 보스, 탈출구 방향으로 카메라가 은근히 유도됨." }
          ],
          refs: [
            { label: "Ghost of Tsushima Free Roam", url: "https://www.youtube.com/watch?v=19Kkfjspwig" },
            { label: "Mirror's Edge Dynamic FOV", url: "https://www.youtube.com/watch?v=AjCPcq-oRo0" },
            { label: "Warframe Gauss Speed", url: "https://www.youtube.com/watch?v=PMcpxQ5FakM" }
          ]
        },
        {
          sub: "2.2 점프 / 낙하 / 착지",
          items: [
            { name: "일반 점프 카메라", desc: "카메라가 캐릭터를 안정적으로 추적." },
            { name: "높은 점프 카메라", desc: "캐릭터가 상승할 때 카메라가 약간 아래로 남아 점프 높이를 강조." },
            { name: "낙하 카메라", desc: "아래 공간을 보여주기 위해 카메라가 위쪽에서 아래를 향함." },
            { name: "장거리 낙하 카메라", desc: "캐릭터 뒤를 따라가며 낙하 속도와 깊이를 강조." },
            { name: "착지 충격 카메라", desc: "착지 순간 카메라가 아래로 짧게 흔들리고 복귀." },
            { name: "슈퍼 히어로 랜딩 카메라", desc: "착지 직전 카메라가 낮아지고, 착지 순간 슬로우 또는 충격 흔들림을 줌." },
            { name: "전투 착지 카메라", desc: "착지하면서 적을 공격하는 경우 카메라가 타격 지점으로 살짝 당겨짐." }
          ],
          refs: [
            { label: "Kingdom Hearts 3 Air Combat", url: "https://www.youtube.com/watch?v=x5vAHf80_wA" },
            { label: "Space Marine 2 Death from Above", url: "https://www.youtube.com/watch?v=CPKMN6W5TTE" },
            { label: "Ratchet & Clank Rift Apart", url: "https://www.youtube.com/watch?v=GffelVJeGws" }
          ]
        },
        {
          sub: "2.3 회피 / 대시 / 구르기 / 슬라이드",
          items: [
            { name: "회피 방향 추적 카메라", desc: "캐릭터 회피 방향을 따라 부드럽게 이동." },
            { name: "회피 후 목표 재정렬 카메라", desc: "회피가 끝나면 적을 다시 화면 중앙에 배치." },
            { name: "저스트 회피 카메라", desc: "성공 순간 짧은 슬로우, 미세 줌 인, 적 공격 궤적 강조." },
            { name: "블링크 회피 카메라", desc: "순간이동형 회피 시 카메라가 잔상처럼 빠르게 따라붙음." },
            { name: "슬라이드 카메라", desc: "카메라 높이를 낮춰 속도감과 지면 마찰감을 강조." },
            { name: "구르기 카메라 안정화", desc: "캐릭터는 회전하지만 카메라는 과도하게 회전하지 않아 멀미를 방지." },
            { name: "연속 대시 카메라", desc: "대시 연속 입력 시 카메라가 넓어지고 속도감이 누적됨." }
          ],
          refs: [
            { label: "Stellar Blade Dodge / Parry", url: "https://www.youtube.com/watch?v=h15E0vgQBmk" },
            { label: "God of War Ragnarok Realm Shift", url: "https://www.youtube.com/watch?v=cPSl30jReZ0" },
            { label: "Bayonetta Witch Time", url: "https://www.youtube.com/watch?v=89gmYLq7VTE" }
          ]
        }
      ]
    },
    {
      n: 3, title: "기본 전투 카메라",
      groups: [
        {
          sub: "3.1 근접 전투 카메라",
          items: [
            { name: "기본 근접 카메라", desc: "캐릭터와 타겟을 동시에 보이게 유지." },
            { name: "타겟 중심 카메라", desc: "플레이어와 적 사이의 중간 지점을 기준으로 카메라가 움직임." },
            { name: "플레이어 중심 카메라", desc: "캐릭터 조작감을 우선시함. 다수전에서 유리." },
            { name: "적 중심 카메라", desc: "강적, 보스, 엘리트 몬스터 패턴 대응에 유리." },
            { name: "측면 전투 카메라", desc: "플레이어와 적을 옆에서 보여주어 공격 궤적을 강조." },
            { name: "반원형 전투 카메라", desc: "카메라가 플레이어와 적 주변을 미세하게 회전하며 액션감을 줌." },
            { name: "타격 줌 인 카메라", desc: "강공격, 차지 공격, 방어 파괴 성공 시 순간적으로 줌 인." },
            { name: "타격 줌 아웃 카메라", desc: "광역 공격, 다수 적 피격, 폭발 공격 시 카메라가 빠져 범위를 보여줌." },
            { name: "히트 스톱 연동 카메라", desc: "타격 정지감과 함께 카메라가 짧게 멈추거나 흔들림." },
            { name: "콤보 누적 카메라", desc: "콤보가 이어질수록 카메라가 점점 밀착되거나 역동적으로 변함." }
          ],
          refs: [
            { label: "Stellar Blade High Action Combat", url: "https://www.youtube.com/watch?v=NaOLWyuWOtw" },
            { label: "Sifu 1000 Hours Combat", url: "https://www.youtube.com/watch?v=kp8bLtQfkus" },
            { label: "God of War Ragnarok Combat", url: "https://www.youtube.com/watch?v=_BXtDbjdT7Q" },
            { label: "Metal Gear Rising Zandatsu", url: "https://www.youtube.com/watch?v=uPt9QKa6pNE" }
          ]
        },
        {
          sub: "3.2 원거리 전투 카메라",
          items: [
            { name: "기본 사격 카메라", desc: "오버 숄더 형태로 전환됨." },
            { name: "정조준 카메라", desc: "카메라가 어깨 뒤로 밀착되고 조준점이 명확해짐." },
            { name: "힙파이어 카메라", desc: "카메라 거리를 크게 바꾸지 않고 빠른 사격을 지원." },
            { name: "무거운 총기 카메라", desc: "반동에 맞춰 카메라가 뒤로 밀리고 흔들림." },
            { name: "스나이퍼/정밀 조준 카메라", desc: "FOV 축소, 숨 고르기, 주변 흐림 연출." },
            { name: "락온 사격 카메라", desc: "타겟을 중심에 두되 플레이어 이동은 자유롭게 유지." },
            { name: "탄막 회피 카메라", desc: "적 투사체가 화면 안에 보이도록 카메라가 넓어짐." },
            { name: "처치 확인 카메라", desc: "마지막 탄환이나 헤드샷 성공 시 짧은 줌 인 또는 미세 슬로우." },
            { name: "무기 반동 카메라", desc: "총기 발사감 강화를 위해 카메라 피치가 미세하게 튐." },
            { name: "과열/재장전 카메라", desc: "무기 상태를 보여주기 위해 카메라가 캐릭터 손이나 무기 쪽으로 약간 당겨짐." }
          ],
          refs: [
            { label: "RE4 Remake Scope / Aim FOV", url: "https://www.youtube.com/watch?v=OG_zRWco4cQ" },
            { label: "TLOU Part II Aim Gameplay", url: "https://www.youtube.com/watch?v=wSu9CV6eGQk" },
            { label: "Space Marine 2 Purgation", url: "https://www.youtube.com/watch?v=SkMCGqGsas4" },
            { label: "Doom Eternal Combat", url: "https://www.youtube.com/watch?v=TX9RcNvSQ8A" }
          ]
        },
        {
          sub: "3.3 근접 + 원거리 하이브리드 카메라",
          note: "스페이스마린2 스타일의 핵심 영역.",
          items: [
            { name: "근접 중 즉시 사격 카메라", desc: "근접 콤보 중 총기 사용 시 카메라가 빠르게 어깨 뒤로 이동." },
            { name: "사격 중 근접 돌입 카메라", desc: "총을 쏘다가 적에게 돌진하면 카메라가 넓어지며 근접 전투 구도로 바뀜." },
            { name: "총검/체인소드 전환 카메라", desc: "무기 전환 순간 손, 무기, 적의 거리감을 강조." },
            { name: "건 스트라이크 카메라", desc: "근접 패링 후 짧은 총격 피니시를 보여주는 카메라." },
            { name: "근거리 헤드샷 카메라", desc: "적을 붙잡고 쏘거나 짧은 거리에서 마무리할 때 강한 줌 인." },
            { name: "사격 중 처형 가능 표시 카메라", desc: "처형 가능한 적을 화면 중앙 또는 시야 안에 남기도록 보정." },
            { name: "적 무리 관통 사격 카메라", desc: "관통탄, 샷건, 폭발탄 등 범위 사격 시 카메라가 넓어짐." }
          ],
          refs: [
            { label: "Stellar Blade Combat Gameplay", url: "https://www.youtube.com/watch?v=oG1VjLyxxG0" },
            { label: "Space Marine 2 Combat", url: "https://www.youtube.com/watch?v=dNmmtdqLAHo" },
            { label: "Space Marine 2 Executions", url: "https://www.youtube.com/watch?v=8WwJPTqMh-8" },
            { label: "Doom Eternal Glory Kills", url: "https://www.youtube.com/watch?v=puuXQeMzS7Q" }
          ]
        }
      ]
    },
    {
      n: 4, title: "락온 카메라",
      groups: [
        {
          sub: "4.1 기본 락온",
          items: [
            { name: "하드 락온", desc: "카메라가 항상 타겟을 중심에 둠. 보스전, 1:1 전투에 적합." },
            { name: "소프트 락온", desc: "플레이어 입력을 우선하고 카메라가 은근히 타겟을 따라감. 다수전에 적합." },
            { name: "자동 락온", desc: "공격 입력 시 가까운 적을 자동으로 잡음." },
            { name: "수동 락온", desc: "플레이어가 버튼으로 타겟을 지정." },
            { name: "공격 중 임시 락온", desc: "공격 모션 중에만 카메라가 적을 추적하고, 이후 자유 카메라로 복귀." },
            { name: "스킬 전용 락온", desc: "특정 스킬 사용 시만 타겟을 고정." },
            { name: "보스 전용 락온", desc: "보스전에서는 강한 락온, 일반 전투에서는 약한 락온을 사용." },
            { name: "락온 해제 카메라", desc: "타겟이 사망하거나 시야 밖으로 나가면 카메라가 플레이어 방향으로 복귀." }
          ],
          refs: [
            { label: "Elden Ring Target Lock Guide", url: "https://www.youtube.com/watch?v=1NgMrG-FLqM" },
            { label: "Sekiro Boss Camera Lock", url: "https://www.youtube.com/watch?v=BNAQJ7WjZeM" },
            { label: "Stellar Blade Raven Boss", url: "https://www.youtube.com/watch?v=NyIcNl0JGbU" }
          ]
        },
        {
          sub: "4.2 락온 전환",
          items: [
            { name: "우측 타겟 전환", desc: "오른쪽 스틱 입력으로 다음 적 선택." },
            { name: "가장 가까운 적 전환", desc: "플레이어 기준 최단거리 적 우선." },
            { name: "화면 중앙 적 전환", desc: "현재 카메라 중앙에 가까운 적 우선." },
            { name: "위협도 높은 적 전환", desc: "공격 중인 적, 엘리트 적, 원거리 적을 우선." },
            { name: "보스 부위 전환", desc: "머리, 팔, 약점, 장갑 부위 등 부위 락온." },
            { name: "공중 적 전환", desc: "공중 적이 공격할 때 카메라가 위쪽으로 보정됨." },
            { name: "다수 적 전환 제한", desc: "너무 잦은 타겟 전환을 막기 위해 락온 쿨타임을 둠." },
            { name: "처형 가능 적 우선 전환", desc: "처형 가능한 적이 있으면 카메라가 해당 적을 우선적으로 화면 안에 둠." }
          ],
          refs: [
            { label: "Batman Arkham Multi Fear Takedown", url: "https://www.youtube.com/watch?v=9cH2zmLtRAs" },
            { label: "Spider-Man All Takedowns", url: "https://www.youtube.com/watch?v=DqtxDFF07c0" },
            { label: "Batman Arkham Crowd Combat", url: "https://www.youtube.com/watch?v=I0Er1ugKNK8" }
          ]
        }
      ]
    },
    {
      n: 5, title: "다수전 / 웨이브 전투 카메라",
      intro: "스페이스마린2 레퍼런스에서 가장 중요한 영역.",
      groups: [
        {
          sub: "5.1 적 무리 대응 카메라",
          items: [
            { name: "후방 위협 감지 카메라", desc: "플레이어 뒤에서 적이 접근하면 카메라가 살짝 넓어짐." },
            { name: "측면 포위 감지 카메라", desc: "좌우 적을 볼 수 있게 카메라가 뒤로 빠짐." },
            { name: "360도 포위 카메라", desc: "캐릭터 주변 전체를 파악할 수 있도록 높은 위치와 넓은 FOV를 사용." },
            { name: "전방 웨이브 강조 카메라", desc: "적 무리가 정면에서 몰려올 때 카메라가 약간 낮아져 압박감을 줌." },
            { name: "벽처럼 밀려오는 적 카메라", desc: "대규모 적 웨이브를 넓은 렌즈로 보여줌." },
            { name: "우선 위협 카메라", desc: "가장 위험한 적이 시야 밖에 있을 경우 카메라를 보정." },
            { name: "군중 속 타겟 유지 카메라", desc: "플레이어가 공격 중인 적을 잃지 않도록 주변 적을 투명화하거나 카메라를 높임." },
            { name: "다수 처치 카메라", desc: "광역 공격으로 여러 적이 쓰러질 때 카메라가 짧게 뒤로 빠짐." },
            { name: "포위 탈출 카메라", desc: "탈출 방향을 보여주기 위해 카메라가 빈 공간 쪽으로 유도됨." },
            { name: "후방 공격 경고 카메라", desc: "카메라가 직접 회전하지 않고, 화면 가장자리 경고와 약한 카메라 흔들림으로 처리할 수도 있음." }
          ],
          refs: [
            { label: "Space Marine 2 Tyranid Swarms", url: "https://www.youtube.com/watch?v=cJKanqL0ybU" },
            { label: "Days Gone Saw Mill Horde", url: "https://www.youtube.com/watch?v=AowVZUYUhPs" },
            { label: "Ghost of Tsushima Group Combat", url: "https://www.youtube.com/watch?v=Glt8fQMn3ag" }
          ]
        },
        {
          sub: "5.2 협동 플레이 카메라",
          items: [
            { name: "아군 위치 인지 카메라", desc: "아군이 화면 밖에 있을 때 UI 방향 표시와 함께 카메라가 과하게 흔들리지 않도록 유지." },
            { name: "아군 처형 연출 관람 카메라", desc: "근처 아군이 처형을 실행하면 짧게 시야 안에 잡아줄 수 있음." },
            { name: "아군 위기 카메라", desc: "아군이 다운되면 해당 방향을 살짝 알려줌." },
            { name: "공동 피니셔 카메라", desc: "두 명 이상이 적을 동시에 처치할 때 전용 카메라." },
            { name: "보스 어그로 카메라", desc: "보스가 나를 보지 않더라도 공격 방향을 파악할 수 있게 보스와 플레이어를 같이 잡음." },
            { name: "멀티플레이 제한 카메라", desc: "다른 유저의 시야를 강제로 방해하지 않기 위해 컷신성 카메라를 최소화." }
          ],
          refs: [
            { label: "Space Marine 2 PVE Co-op", url: "https://www.youtube.com/watch?v=AGXtVUk3AeU" },
            { label: "Helldivers 2 Co-op", url: "https://www.youtube.com/watch?v=QC1XWXRz5SU" },
            { label: "Destiny 2 Double Finishers", url: "https://www.youtube.com/watch?v=79JrEerHwzc" }
          ]
        }
      ]
    },
    {
      n: 6, title: "보스전 카메라",
      intro: "스텔라블레이드식 정밀 전투를 목표로 한다면 특히 중요함.",
      groups: [
        {
          sub: "6.1 기본 보스 카메라",
          items: [
            { name: "1:1 결투 카메라", desc: "플레이어와 보스를 모두 화면 안에 넣는 중거리 카메라." },
            { name: "대형 보스 카메라", desc: "보스 전체가 보이도록 카메라를 뒤로 빼고 높임." },
            { name: "초대형 보스 카메라", desc: "보스의 전체가 아니라 공격 부위와 플레이어를 중심으로 잡음." },
            { name: "보스 약점 카메라", desc: "약점이 노출되면 해당 부위가 화면 중심에 들어오도록 보정." },
            { name: "보스 패턴 예고 카메라", desc: "보스가 큰 기술을 준비할 때 카메라가 살짝 줌 아웃되어 범위를 보여줌." },
            { name: "보스 돌진 카메라", desc: "보스가 멀리서 돌진하면 카메라가 전방을 크게 열어줌." },
            { name: "보스 점프 공격 카메라", desc: "보스가 공중으로 사라질 경우 카메라가 위로 따라가지 않고 착지 지점을 보여주는 것이 좋음." },
            { name: "보스 광역기 카메라", desc: "회피 가능한 공간을 보여주기 위해 카메라가 넓어짐." },
            { name: "보스 페이즈 전환 카메라", desc: "체력 구간 변화 시 짧은 시네마틱 카메라로 전환." },
            { name: "보스 처치 카메라", desc: "마지막 일격, 붕괴, 폭발, 추락 등을 강조하는 마무리 카메라." }
          ],
          refs: [
            { label: "Stellar Blade All Bosses", url: "https://www.youtube.com/watch?v=BvxRAjJYHdw" },
            { label: "God of War Ragnarok Gna Boss", url: "https://www.youtube.com/watch?v=fERuzCJuuaA" },
            { label: "FF XVI Titan Boss", url: "https://www.youtube.com/watch?v=oYfSM5uhi4w" },
            { label: "Shadow of the Colossus", url: "https://www.youtube.com/watch?v=lcTh9Wm0Z5M" }
          ]
        },
        {
          sub: "6.2 보스 공격 대응 카메라",
          items: [
            { name: "패링 유도 카메라", desc: "보스의 무기 궤적이 잘 보이도록 측면 각도를 유지." },
            { name: "회피 유도 카메라", desc: "보스의 공격 범위와 안전지대가 보이도록 넓어짐." },
            { name: "카운터 가능 타이밍 카메라", desc: "공격 직전 짧은 줌 인, 색수차, 시간 감속 등을 사용 가능." },
            { name: "즉사기 대응 카메라", desc: "위험 패턴은 카메라가 넓어지고 보스 전체 실루엣을 보여줌." },
            { name: "잡기 공격 카메라", desc: "보스가 플레이어를 붙잡으면 전용 클로즈업 카메라로 전환." },
            { name: "탈출 QTE 카메라", desc: "플레이어의 저항 모션, 보스 손, 위험 부위를 번갈아 보여줌." },
            { name: "그로기 카메라", desc: "보스가 무너질 때 카메라가 약점 또는 처형 위치를 보여줌." }
          ],
          refs: [
            { label: "FF XVI Combat Overview", url: "https://www.youtube.com/watch?v=bNulcTtGU9Q" },
            { label: "MHW Alatreon", url: "https://www.youtube.com/watch?v=nHOQ0SUasL0" },
            { label: "GoW Ragnarok Thor Boss", url: "https://www.youtube.com/watch?v=KeI0b4Hnfyw" }
          ]
        }
      ]
    },
    {
      n: 7, title: "공격 액션별 카메라",
      groups: [
        {
          sub: "7.1 일반 공격",
          items: [
            { name: "약공격 카메라", desc: "카메라 변화 최소화. 조작 안정성 우선." },
            { name: "강공격 카메라", desc: "타격 직전 미세 줌 인, 타격 순간 흔들림." },
            { name: "차지 공격 카메라", desc: "차지 중 카메라가 천천히 당겨지고, 발동 시 빠르게 풀림." },
            { name: "돌진 공격 카메라", desc: "캐릭터 뒤에서 속도감을 강조." },
            { name: "점프 공격 카메라", desc: "착지 지점과 적을 동시에 보여줌." },
            { name: "공중 공격 카메라", desc: "지상 적과 캐릭터 높이 차이를 보여주는 사선 카메라." },
            { name: "내려찍기 카메라", desc: "카메라가 순간적으로 낮아지거나 위에서 아래로 따라감." },
            { name: "회전 공격 카메라", desc: "카메라는 과하게 회전하지 않고 범위만 넓혀야 함." },
            { name: "관통 공격 카메라", desc: "공격 방향으로 카메라가 살짝 밀리며 궤적을 강조." },
            { name: "마무리 일격 카메라", desc: "적 체력이 낮을 때 마지막 타격을 강조하는 짧은 연출." }
          ],
          refs: [
            { label: "Stellar Blade Aggressive Combat", url: "https://www.youtube.com/watch?v=oG1VjLyxxG0" },
            { label: "Sifu Ruthless Combat", url: "https://www.youtube.com/watch?v=GbEcXsj_cME" },
            { label: "Monster Hunter Hit Lag", url: "https://www.youtube.com/watch?v=OdMZSmq6TZM" }
          ]
        },
        {
          sub: "7.2 콤보 카메라",
          items: [
            { name: "고정 콤보 카메라", desc: "콤보 중 카메라가 안정적으로 유지됨." },
            { name: "콤보 단계별 줌 카메라", desc: "1타는 안정, 2타는 살짝 당김, 마지막 타격은 강한 줌." },
            { name: "콤보 방향 전환 카메라", desc: "타겟이 바뀌면 카메라가 부드럽게 전환됨." },
            { name: "콤보 피니시 카메라", desc: "마지막 타격 시 슬로우, 줌 인, 흔들림." },
            { name: "공중 콤보 카메라", desc: "플레이어와 적이 공중에 떠 있을 때 둘 사이를 중심으로 추적." },
            { name: "벽몰이 콤보 카메라", desc: "벽 근처에서 카메라가 끼지 않도록 측면 또는 상단으로 이동." },
            { name: "다수 타격 콤보 카메라", desc: "여러 적이 맞는 범위가 보이도록 줌 아웃." },
            { name: "콤보 실패 복귀 카메라", desc: "공격이 빗나가면 빠르게 기본 카메라로 복귀." }
          ],
          refs: [
            { label: "Sifu Biggest Combo", url: "https://www.youtube.com/watch?v=wmaFVZ8d66U" },
            { label: "Metal Gear Rising Max Combo", url: "https://www.youtube.com/watch?v=fcyzaMoCVJA" },
            { label: "DMC5 Combat", url: "https://www.youtube.com/watch?v=I0nyTGzPMy4" }
          ]
        },
        {
          sub: "7.3 스킬 카메라",
          items: [
            { name: "즉발 스킬 카메라", desc: "카메라 변화 없이 빠르게 발동." },
            { name: "강조 스킬 카메라", desc: "짧은 줌 인 후 발동." },
            { name: "광역 스킬 카메라", desc: "범위를 보여주기 위해 줌 아웃." },
            { name: "타겟 스킬 카메라", desc: "시전 대상과 플레이어를 동시에 잡음." },
            { name: "돌진 스킬 카메라", desc: "캐릭터를 뒤에서 따라가며 속도감 강조." },
            { name: "잡기 스킬 카메라", desc: "적과 플레이어를 클로즈업." },
            { name: "카운터 스킬 카메라", desc: "적 공격을 받아치는 순간 슬로우와 카메라 스냅." },
            { name: "궁극기 카메라", desc: "조작이 잠시 제한되는 시네마틱 카메라." },
            { name: "궁극기 짧은 버전 카메라", desc: "반복 플레이 피로를 줄이기 위해 1초 이내로 처리." },
            { name: "궁극기 스킵/간소화 카메라", desc: "멀티플레이나 반복 전투에서는 카메라 연출을 줄임." }
          ],
          refs: [
            { label: "Stellar Blade Burst Skills", url: "https://www.youtube.com/watch?v=CKqhmbexDzE" },
            { label: "FF XVI Abilities", url: "https://www.youtube.com/watch?v=6rdLHjv_Ql8" },
            { label: "DMC5 Sin Devil Trigger", url: "https://www.youtube.com/watch?v=JCo4Pjm_0K8" }
          ]
        }
      ]
    },
    {
      n: 8, title: "방어 / 패링 / 카운터 카메라",
      intro: "스텔라블레이드식 빠른 전투감에서 핵심.",
      groups: [
        {
          sub: "방어 / 패링 / 카운터",
          items: [
            { name: "일반 가드 카메라", desc: "카메라 변화 최소화." },
            { name: "가드 충격 카메라", desc: "적 공격을 막을 때 카메라가 짧게 흔들림." },
            { name: "퍼펙트 가드 카메라", desc: "성공 순간 미세 슬로우, 줌 인, 이펙트 중심 정렬." },
            { name: "패링 카메라", desc: "무기 충돌 지점으로 순간적으로 카메라가 당겨짐." },
            { name: "카운터 가능 카메라", desc: "패링 성공 후 적이 화면 중앙에 남도록 정렬." },
            { name: "반격 카메라", desc: "플레이어가 역공할 때 카메라가 플레이어 뒤로 빠르게 재배치됨." },
            { name: "연속 패링 카메라", desc: "카메라가 과하게 흔들리지 않도록 안정성을 유지해야 함." },
            { name: "방어 파괴 카메라", desc: "플레이어 가드가 깨질 때 카메라가 흔들리고 살짝 뒤로 밀림." },
            { name: "적 가드 파괴 카메라", desc: "적이 무너지는 방향을 강조하기 위해 카메라가 낮아짐." },
            { name: "저스트 카운터 카메라", desc: "성공 순간 짧은 정지, 근접 줌, 후속 공격 방향 제시." }
          ],
          refs: [
            { label: "GoW Ragnarok Parry Mechanics", url: "https://www.youtube.com/watch?v=la9j1_OoFSg" },
            { label: "Stellar Blade Perfect Block", url: "https://www.youtube.com/watch?v=Vi0D5fxrTho" },
            { label: "Sekiro Quickdraw Deflect", url: "https://www.youtube.com/watch?v=7A0hj5IdF4A" },
            { label: "Ghost of Tsushima Perfect Parries", url: "https://www.youtube.com/watch?v=CxyalQQp5sA" }
          ]
        }
      ]
    },
    {
      n: 9, title: "피격 / 데미지 카메라",
      groups: [
        {
          sub: "9.1 플레이어 피격",
          items: [
            { name: "약한 피격 카메라", desc: "미세 흔들림만 적용." },
            { name: "강한 피격 카메라", desc: "카메라가 충격 방향으로 튐." },
            { name: "넉백 카메라", desc: "캐릭터가 밀려나는 방향을 따라가되, 적 위치를 잃지 않음." },
            { name: "다운 카메라", desc: "캐릭터가 쓰러질 때 카메라가 낮아짐." },
            { name: "공중 피격 카메라", desc: "캐릭터와 적 위치를 동시에 유지." },
            { name: "벽 충돌 카메라", desc: "벽에 부딪힐 때 충격 흔들림." },
            { name: "체력 위험 카메라", desc: "FOV 축소, 주변 흐림, 흔들림 증가 등으로 위기감 부여." },
            { name: "사망 직전 카메라", desc: "슬로우, 저각도, 적 실루엣 강조." },
            { name: "사망 카메라", desc: "캐릭터 쓰러짐, 적 접근, 화면 암전 등." },
            { name: "부활 카메라", desc: "캐릭터가 다시 일어나는 순간 카메라가 낮은 위치에서 복귀." }
          ],
          refs: [
            { label: "Elden Ring Getting Hit", url: "https://www.youtube.com/watch?v=_Pd5weoBjcE" },
            { label: "GoW Near Death Ogre", url: "https://www.youtube.com/watch?v=0L1BclG9J24" },
            { label: "RE4 Remake Low Health", url: "https://www.youtube.com/watch?v=YMh9T1ZGa9E" },
            { label: "God of War Revive Kratos", url: "https://www.youtube.com/watch?v=oyy471WRsJg" }
          ]
        },
        {
          sub: "9.2 적 피격",
          items: [
            { name: "일반 히트 카메라", desc: "카메라 변화 거의 없음." },
            { name: "중형 적 히트 카메라", desc: "타격감 강화를 위해 약한 줌 인." },
            { name: "대형 적 히트 카메라", desc: "적이 밀리는 방향을 보여줌." },
            { name: "약점 타격 카메라", desc: "약점 부위를 잠깐 강조." },
            { name: "절단/파괴 카메라", desc: "부위 파괴 시 해당 부위가 화면 안에 들어오게 함." },
            { name: "그로기 카메라", desc: "적이 무너지는 순간 처형 위치를 보여줌." },
            { name: "처치 카메라", desc: "마지막 타격에 짧은 흔들림 또는 슬로우." },
            { name: "다수 처치 카메라", desc: "여러 적이 동시에 쓰러지는 장면을 넓게 보여줌." }
          ],
          refs: [
            { label: "Horizon Weak Spot", url: "https://www.youtube.com/watch?v=esPTnc1KnmU" },
            { label: "Dead Space Remake Dismemberment", url: "https://www.youtube.com/watch?v=lIwY_qCdkVc" },
            { label: "Sekiro Posture Deathblow", url: "https://www.youtube.com/watch?v=vhkwdNCQwbY" }
          ]
        }
      ]
    },
    {
      n: 10, title: "처형 / 피니셔 카메라",
      intro: "스페이스마린2는 처형, 카운터, 건 스트라이크처럼 강한 근접 피니시 액션이 핵심이므로 반드시 별도 설계가 필요함.",
      groups: [
        {
          sub: "10.1 일반 처형 카메라",
          items: [
            { name: "고정 처형 카메라", desc: "일정한 각도에서 처형을 보여줌." },
            { name: "동적 처형 카메라", desc: "처형 모션에 따라 카메라가 회전, 줌, 이동." },
            { name: "클로즈업 처형 카메라", desc: "캐릭터 손, 무기, 적 반응을 크게 보여줌." },
            { name: "와이드 처형 카메라", desc: "주변 적과 전장을 같이 보여줌. 다수전에서 유리." },
            { name: "저각도 처형 카메라", desc: "플레이어의 압도적인 힘을 강조." },
            { name: "상단 처형 카메라", desc: "내려찍기, 절단, 압살 연출에 적합." },
            { name: "측면 처형 카메라", desc: "무기 궤적과 적의 리액션을 잘 보여줌." },
            { name: "실루엣 처형 카메라", desc: "역광, 그림자, 피분사 등을 이용한 스타일 연출." },
            { name: "짧은 처형 카메라", desc: "반복 플레이 피로를 줄이기 위한 0.5~1초 처형." },
            { name: "긴 처형 카메라", desc: "보스, 엘리트, 첫 등장 적 처치에 사용." }
          ],
          refs: [
            { label: "Space Marine 2 Executions", url: "https://www.youtube.com/watch?v=8WwJPTqMh-8" },
            { label: "Doom Eternal Mancubus Glory Kill", url: "https://www.youtube.com/watch?v=RPHhQxpK9CI" },
            { label: "GoW Ragnarok Finishers", url: "https://www.youtube.com/watch?v=8L5AHTCIATk" },
            { label: "Sekiro Deathblow Camera", url: "https://www.youtube.com/watch?v=RKNneppyFi4" }
          ]
        },
        {
          sub: "10.2 처형 조건별 카메라",
          items: [
            { name: "일반 적 처형", desc: "짧고 빠르게 처리." },
            { name: "엘리트 적 처형", desc: "카메라가 더 가까워지고 무게감 증가." },
            { name: "대형 적 처형", desc: "카메라가 넓어져 적의 크기를 유지." },
            { name: "보스 처형", desc: "시네마틱 카메라로 전환 가능." },
            { name: "공중 처형", desc: "낙하, 공중 절단, 바닥 충돌을 함께 보여줌." },
            { name: "벽 처형", desc: "벽에 찍거나 밀어붙이는 카메라." },
            { name: "군중 속 처형", desc: "처형 중 주변 적에게 둘러싸인 압박감을 유지." },
            { name: "연속 처형", desc: "첫 처형은 강조, 이후는 짧게 처리." },
            { name: "협동 처형", desc: "두 명 이상의 캐릭터가 함께 적을 마무리." },
            { name: "회복 연동 처형", desc: "처형으로 체력/실드 회복이 있다면 회복 피드백을 카메라와 함께 전달." }
          ],
          refs: [
            { label: "Space Marine 2 Carnifex Execution", url: "https://www.youtube.com/watch?v=YvBw15z6trY" },
            { label: "Space Marine 2 Terminator Sorcerer", url: "https://www.youtube.com/watch?v=LnF441uToA4" },
            { label: "Doom Eternal Aerial Glory Kill", url: "https://www.youtube.com/watch?v=puuXQeMzS7Q" }
          ]
        }
      ]
    },
    {
      n: 11, title: "카메라 쉐이크 / 임팩트 연출",
      groups: [
        {
          sub: "카메라 쉐이크 / 임팩트",
          items: [
            { name: "무기 타격 쉐이크", desc: "공격 강도에 따라 흔들림 크기 조절." },
            { name: "폭발 쉐이크", desc: "거리와 폭발 규모에 따라 흔들림 차등 적용." },
            { name: "대형 적 발걸음 쉐이크", desc: "보스나 거대 적이 걸을 때 미세 진동." },
            { name: "착지 쉐이크", desc: "플레이어 또는 적이 강하게 착지할 때 적용." },
            { name: "피격 방향 쉐이크", desc: "맞은 방향으로 카메라가 튐." },
            { name: "환경 붕괴 쉐이크", desc: "건물, 지형, 구조물이 무너질 때 적용." },
            { name: "과도한 쉐이크 억제", desc: "빠른 액션 게임에서는 카메라 흔들림이 과하면 조작 피로도가 커지므로 옵션화 필요." },
            { name: "히트 스톱 + 쉐이크 조합", desc: "타격 순간 짧게 멈추고 흔들림을 주면 타격감이 강해짐." },
            { name: "연속 타격 쉐이크 감쇠", desc: "다단히트마다 동일하게 흔들면 피로하므로 점점 줄이거나 핵심 타격에만 적용." },
            { name: "피니셔 전용 쉐이크", desc: "처형, 궁극기, 보스 그로기 등에서만 강하게 사용." }
          ],
          refs: [
            { label: "Doom Eternal Blowing Up Mars", url: "https://www.youtube.com/watch?v=TuHs6UyjW18" },
            { label: "Monster Hunter Hit Lag", url: "https://www.youtube.com/watch?v=OdMZSmq6TZM" },
            { label: "Dead Space Reduce Camera Shake", url: "https://www.youtube.com/watch?v=r_zpQOAABXM" }
          ]
        }
      ]
    },
    {
      n: 12, title: "슬로우 모션 카메라",
      groups: [
        {
          sub: "슬로우 모션",
          items: [
            { name: "저스트 회피 슬로우", desc: "적 공격을 아슬아슬하게 피했을 때 발동." },
            { name: "퍼펙트 패링 슬로우", desc: "정확한 타이밍 방어 성공 시 발동." },
            { name: "카운터 오픈 슬로우", desc: "반격 기회가 열린 순간 짧게 감속." },
            { name: "처형 진입 슬로우", desc: "처형 시작 직전 적이 무너지는 순간 감속." },
            { name: "마지막 일격 슬로우", desc: "보스나 엘리트 처치 시 사용." },
            { name: "탄환 회피 슬로우", desc: "원거리 공격을 회피할 때 사용 가능." },
            { name: "폭발 직전 슬로우", desc: "위험 회피, 탈출, QTE에 적합." },
            { name: "궁극기 발동 슬로우", desc: "스킬의 위력을 강조." },
            { name: "사망 직전 슬로우", desc: "플레이어가 치명타를 맞았을 때 극적 연출." },
            { name: "멀티플레이 제한 슬로우", desc: "협동 플레이에서는 전체 시간을 느리게 만들기 어렵기 때문에 개인 카메라 연출로 대체." }
          ],
          refs: [
            { label: "Bayonetta Witch Time", url: "https://www.youtube.com/watch?v=CyU4INZsM_c" },
            { label: "Zelda BOTW Flurry Rush", url: "https://www.youtube.com/watch?v=Nm4eCduzqb0" },
            { label: "Spider-Man Perfect Dodge", url: "https://www.youtube.com/watch?v=Sq5NMbsJRJc" }
          ]
        }
      ]
    },
    {
      n: 13, title: "FOV 연출",
      groups: [
        {
          sub: "FOV",
          items: [
            { name: "기본 FOV", desc: "안정적인 플레이를 위한 표준값." },
            { name: "전투 FOV 확장", desc: "적이 많아질수록 시야를 넓힘." },
            { name: "달리기 FOV 확장", desc: "속도감을 강화." },
            { name: "조준 FOV 축소", desc: "정밀 사격과 집중감 강화." },
            { name: "위기 FOV 축소", desc: "체력 저하, 압박 상황에서 긴장감 부여." },
            { name: "보스 광역기 FOV 확장", desc: "회피 공간을 보여줌." },
            { name: "궁극기 FOV 왜곡", desc: "초월적 힘, 에너지 방출, 차원 왜곡 연출." },
            { name: "처형 FOV 축소", desc: "잔혹한 마무리와 집중감 강화." },
            { name: "폭발 FOV 킥", desc: "폭발 순간 FOV가 튀었다가 복귀." },
            { name: "속도 기반 FOV", desc: "이동 속도, 대시, 낙하 속도에 따라 동적으로 변함." }
          ],
          refs: [
            { label: "God of War FOV Slider", url: "https://www.youtube.com/watch?v=R9QsOMC0FzA" },
            { label: "Space Marine FOV Slider", url: "https://www.youtube.com/watch?v=lqHyvfz401A" },
            { label: "Mirror's Edge Dynamic FOV", url: "https://www.youtube.com/watch?v=AjCPcq-oRo0" }
          ]
        }
      ]
    },
    {
      n: 14, title: "카메라 앵글 연출",
      groups: [
        {
          sub: "카메라 앵글",
          items: [
            { name: "저각도 카메라", desc: "플레이어의 힘, 거대함, 영웅성을 강조." },
            { name: "고각도 카메라", desc: "전장 상황, 포위, 적 수를 보여줌." },
            { name: "사선 카메라", desc: "공격 방향과 속도감을 강조." },
            { name: "측면 카메라", desc: "검격, 돌진, 충돌 장면에 적합." },
            { name: "정면 역방향 카메라", desc: "캐릭터가 카메라 쪽으로 달려오는 장면에 사용." },
            { name: "후방 추격 카메라", desc: "일반 이동과 전투 진입에 적합." },
            { name: "회전 카메라", desc: "처형, 궁극기, 보스 등장에 사용." },
            { name: "핸드헬드 카메라", desc: "전쟁터, 폭발, 혼란스러운 전투에 적합." },
            { name: "고정 시네마틱 카메라", desc: "문 열림, 보스 등장, 이벤트 연출에 사용." },
            { name: "드론/관찰자 카메라", desc: "전장 전체 규모를 보여주는 장면에 사용." }
          ],
          refs: [
            { label: "Space Marine 2 Camera Angles", url: "https://www.youtube.com/watch?v=U5LPVxqnpXU" },
            { label: "Metal Gear Rising Blade Mode", url: "https://www.youtube.com/watch?v=owKOjr3RS2I" },
            { label: "Battlefield 1 No HUD", url: "https://www.youtube.com/watch?v=hCYjzwSsEh8" }
          ]
        }
      ]
    },
    {
      n: 15, title: "카메라 전환 연출",
      groups: [
        {
          sub: "카메라 전환",
          items: [
            { name: "즉시 컷 전환", desc: "빠르고 강한 액션에 적합하지만 남용하면 어지러움." },
            { name: "부드러운 블렌딩 전환", desc: "플레이 카메라에서 연출 카메라로 자연스럽게 이동." },
            { name: "카메라 스냅", desc: "적 공격, 패링, 타겟 전환 시 순간적으로 각도 보정." },
            { name: "줌 전환", desc: "연출 시작 시 줌 인, 종료 시 줌 아웃." },
            { name: "회전 전환", desc: "처형이나 보스 등장에 사용." },
            { name: "암전 전환", desc: "컷신, 사망, 미션 진입에 사용." },
            { name: "환경 오브젝트 와이프", desc: "기둥, 문, 벽을 지나며 자연스럽게 카메라 전환." },
            { name: "슬로우 진입 전환", desc: "퍼펙트 액션 성공 시 시간 감속과 함께 카메라 전환." },
            { name: "게임플레이 복귀 전환", desc: "연출 후 조작 가능한 기본 카메라로 빠르게 복귀." },
            { name: "멀티플레이 비동기 전환", desc: "각 플레이어에게만 보이는 개인 연출 카메라." }
          ],
          refs: [
            { label: "GoWR Seamless Transitions", url: "https://www.youtube.com/watch?v=aUCzxjgDI0A" },
            { label: "Batman Double Counter Zoom", url: "https://www.youtube.com/watch?v=cWhgOMleld8" },
            { label: "Elden Ring You Died", url: "https://www.youtube.com/watch?v=OrviqYQNaZ8" }
          ]
        }
      ]
    },
    {
      n: 16, title: "환경 / 레벨 카메라",
      groups: [
        {
          sub: "16.1 좁은 공간",
          items: [
            { name: "실내 압축 카메라", desc: "벽과 천장에 맞춰 카메라를 가까이 둠." },
            { name: "좁은 복도 카메라", desc: "전방 시야를 길게 보여줌." },
            { name: "코너 카메라", desc: "코너를 돌 때 적이 갑자기 보이도록 약간의 지연을 줌." },
            { name: "문 통과 카메라", desc: "문을 열거나 통과할 때 카메라가 살짝 낮아짐." },
            { name: "엘리베이터/터널 카메라", desc: "캐릭터와 동료의 긴장감을 가까이 잡음." }
          ],
          refs: [
            { label: "Dead Space Narrow Corridor", url: "https://www.youtube.com/watch?v=n7YW6gpP2sY" },
            { label: "Sifu Hallway Fight", url: "https://www.youtube.com/watch?v=G5TRuLaL_wU" }
          ]
        },
        {
          sub: "16.2 넓은 전장",
          items: [
            { name: "전장 공개 카메라", desc: "넓은 지역 진입 시 카메라가 뒤로 빠져 규모를 보여줌." },
            { name: "목표 지점 강조 카메라", desc: "방어 지점, 포탑, 보스, 게이트 등을 보여줌." },
            { name: "적 웨이브 등장 카메라", desc: "적이 몰려오는 방향을 짧게 보여줌." },
            { name: "아군 진입 카메라", desc: "지원군, 드랍 포드, 차량, NPC 등장 연출." },
            { name: "환경 붕괴 카메라", desc: "다리, 벽, 건물 붕괴를 보여줌." }
          ],
          refs: [
            { label: "Elden Ring Limgrave", url: "https://www.youtube.com/watch?v=OoquxgPdW0E" },
            { label: "Space Marine Horde Waves", url: "https://www.youtube.com/watch?v=cUAba_YFC74" },
            { label: "Uncharted Tower Collapse", url: "https://www.youtube.com/watch?v=M177gRUajsg" }
          ]
        },
        {
          sub: "16.3 수직 공간",
          items: [
            { name: "계단 카메라", desc: "위아래 적을 모두 볼 수 있도록 높이 보정." },
            { name: "사다리 카메라", desc: "캐릭터 몸과 도착 지점을 보여줌." },
            { name: "엘리베이터 상승 카메라", desc: "공간의 높이와 스케일 강조." },
            { name: "절벽 카메라", desc: "낙하 위험과 경로를 보여줌." },
            { name: "공중 플랫폼 카메라", desc: "발판 위치와 적 위치를 동시에 유지." }
          ],
          refs: [
            { label: "Sifu Stairs Fixed Camera", url: "https://www.youtube.com/watch?v=DK1KWmYlahk" },
            { label: "Uncharted Rock Climbing", url: "https://www.youtube.com/watch?v=OteCnLxLQMM" }
          ]
        }
      ]
    },
    {
      n: 17, title: "특수 상황 카메라",
      groups: [
        {
          sub: "특수 상황",
          items: [
            { name: "보스 등장 카메라", desc: "보스 실루엣, 발, 무기, 얼굴 순으로 보여줌." },
            { name: "엘리트 적 등장 카메라", desc: "짧은 줌 인과 UI 경고." },
            { name: "기습 카메라", desc: "적이 튀어나오는 방향을 순간적으로 잡음." },
            { name: "매복 카메라", desc: "카메라를 일부러 좁게 유지해 긴장감 형성." },
            { name: "탈출 카메라", desc: "뒤에서 무언가 무너지는 장면을 보여주거나 전방 탈출로를 강조." },
            { name: "방어전 카메라", desc: "거점, 적 진입로, 아군 위치를 한눈에 보이게 함." },
            { name: "호위 카메라", desc: "보호 대상과 플레이어를 동시에 잡음." },
            { name: "오브젝트 파괴 카메라", desc: "목표물이 파괴되는 순간 짧게 강조." },
            { name: "상호작용 카메라", desc: "스위치, 문, 장치, 터미널 조작 시 손과 장치를 보여줌." },
            { name: "탑승물 카메라", desc: "차량, 포탑, 워커, 드론 조작 시 별도 카메라 사용." }
          ],
          refs: [
            { label: "Stellar Blade Behemoth", url: "https://www.youtube.com/watch?v=dy6gCA5_vPo" },
            { label: "RE4 Chainsaw Man Intro", url: "https://www.youtube.com/watch?v=SIFs2Ex3iag" },
            { label: "Uncharted 4 Chase", url: "https://www.youtube.com/watch?v=pUPJdWe-zVU" },
            { label: "Titanfall 2 BT", url: "https://www.youtube.com/watch?v=hFkRVTj7x-s" }
          ]
        }
      ]
    },
    {
      n: 18, title: "컷신과 게임플레이 연결 카메라",
      groups: [
        {
          sub: "컷신 연결",
          items: [
            { name: "시네마틱 진입 카메라", desc: "플레이 중 자연스럽게 컷신으로 이어짐." },
            { name: "컷신 종료 후 동일 앵글 복귀", desc: "컷신 마지막 카메라가 그대로 플레이 카메라로 이어짐." },
            { name: "보스 컷신 후 전투 카메라", desc: "보스 등장 연출 후 락온 카메라로 자연 전환." },
            { name: "문 열림 후 전장 공개 카메라", desc: "문이 열리며 다음 전투 공간을 보여줌." },
            { name: "미션 시작 카메라", desc: "착륙, 진입, 무기 장전, 아군 합류 등을 보여줌." },
            { name: "미션 완료 카메라", desc: "전장 정리, 탈출, 승리 포즈, 다음 목표 암시." },
            { name: "사망 후 리스폰 카메라", desc: "쓰러짐, 암전, 재배치, 부활 순서." },
            { name: "체크포인트 복귀 카메라", desc: "카메라가 빠르게 기본 위치를 회복." }
          ],
          refs: [
            { label: "GoW Single Shot Camera", url: "https://www.youtube.com/watch?v=l_RpwPcfhB8" },
            { label: "Uncharted Transitions", url: "https://www.youtube.com/watch?v=69pOFuWil48" },
            { label: "Helldivers Drop Pod", url: "https://www.youtube.com/watch?v=K4j3AFkRPoo" }
          ]
        }
      ]
    },
    {
      n: 19, title: "UI / 피드백 연동 카메라",
      groups: [
        {
          sub: "UI / 피드백",
          items: [
            { name: "피격 방향 표시 카메라", desc: "카메라를 직접 돌리지 않고 방향 UI로 보조." },
            { name: "위험 공격 경고 카메라", desc: "카메라가 적 공격을 보이게 하거나 경고 이펙트로 대체." },
            { name: "처형 가능 표시 카메라", desc: "처형 가능한 적이 화면 밖으로 나가지 않도록 보정." },
            { name: "보스 약점 표시 카메라", desc: "약점이 화면 안에 들어오도록 카메라 조절." },
            { name: "상호작용 가능 오브젝트 카메라", desc: "사용 가능한 오브젝트를 자연스럽게 보이게 함." },
            { name: "미션 목표 방향 카메라", desc: "목표 방향을 카메라가 은근히 유도." },
            { name: "아군 다운 표시 카메라", desc: "아군 위치를 화면 가장자리와 카메라 보정으로 안내." },
            { name: "탄약/재장전 위기 카메라", desc: "총기 중심 플레이에서 무기 상태 피드백을 강화." },
            { name: "체력 위험 카메라", desc: "화면 흔들림, 주변 흐림, FOV 축소와 연동." },
            { name: "궁극기 충전 완료 카메라", desc: "짧은 펄스, 이펙트, 사운드와 함께 미세 줌을 줄 수 있음." }
          ],
          refs: [
            { label: "Spider-Man Attack Indicator", url: "https://www.youtube.com/watch?v=40uN7Bg_RVc" },
            { label: "GoWR Unblockable Warning", url: "https://www.youtube.com/watch?v=D1DqkuipfRA" },
            { label: "Ghost Guiding Wind", url: "https://www.youtube.com/watch?v=TaU0uXGK8y0" }
          ]
        }
      ]
    },
    {
      n: 20, title: "카메라 보정 시스템",
      intro: "실제 개발에서는 연출보다 보정 규칙이 더 중요함.",
      groups: [
        {
          sub: "보정 시스템",
          items: [
            { name: "벽 충돌 보정", desc: "카메라가 벽 뒤로 들어가지 않음." },
            { name: "캐릭터 가림 방지", desc: "적, 벽, 기둥이 캐릭터를 가리면 투명화 또는 카메라 이동." },
            { name: "타겟 가림 방지", desc: "락온 중 적이 가려지면 카메라 높이와 각도 조절." },
            { name: "바닥/천장 충돌 보정", desc: "좁은 실내에서 카메라가 튀지 않도록 처리." },
            { name: "속도 기반 카메라 보정", desc: "이동 속도에 따라 추적 거리와 반응 속도 변경." },
            { name: "전투 밀도 기반 보정", desc: "적이 많으면 카메라를 넓히고 높임." },
            { name: "위협도 기반 보정", desc: "위험한 적이 시야 밖에 있으면 화면 안으로 유도." },
            { name: "입력 우선 보정", desc: "플레이어가 직접 카메라를 돌리면 자동 보정을 일시적으로 약화." },
            { name: "락온 우선 보정", desc: "보스전에서는 플레이어 입력보다 타겟 유지가 우선." },
            { name: "멀미 방지 보정", desc: "회전 속도, 흔들림, FOV 변화를 제한." }
          ],
          refs: [
            { label: "Silent Hill Camera Collision", url: "https://www.youtube.com/watch?v=h1YqUbQkcF4" },
            { label: "See Through Walls", url: "https://www.youtube.com/watch?v=kgTeriH-Rew" },
            { label: "GoWR Recenter on Attack", url: "https://www.youtube.com/watch?v=VobbIe_uZiE" },
            { label: "Dead Space Motion Sickness", url: "https://www.youtube.com/watch?v=r_zpQOAABXM" }
          ]
        }
      ]
    },
    {
      n: 21, title: "연출 강도별 카메라 분류",
      groups: [
        {
          sub: "약한 연출",
          note: "일반 공격, 이동, 약한 피격, 일반 적 처치에 사용.",
          items: [
            { name: "카메라 흔들림 작음", desc: "" },
            { name: "줌 변화 거의 없음", desc: "" },
            { name: "조작감 최우선", desc: "" },
            { name: "반복 피로도 낮음", desc: "" }
          ],
          refs: [
            { label: "Ghost of Tsushima No HUD", url: "https://www.youtube.com/watch?v=ZkpAwrlvJQI" }
          ]
        },
        {
          sub: "중간 연출",
          note: "강공격, 패링, 회피, 엘리트 적 피격, 스킬 사용에 사용.",
          items: [
            { name: "짧은 줌 인/아웃", desc: "" },
            { name: "약한 슬로우", desc: "" },
            { name: "방향 보정", desc: "" },
            { name: "타격감 강화", desc: "" }
          ],
          refs: [
            { label: "Stellar Dodge / Parry", url: "https://www.youtube.com/watch?v=h15E0vgQBmk" },
            { label: "GoWR Parry Mechanics", url: "https://www.youtube.com/watch?v=la9j1_OoFSg" }
          ]
        },
        {
          sub: "강한 연출",
          note: "처형, 궁극기, 보스 페이즈 전환, 대형 폭발, 미션 클라이맥스에 사용.",
          items: [
            { name: "시네마틱 카메라", desc: "" },
            { name: "강한 카메라 쉐이크", desc: "" },
            { name: "슬로우 모션", desc: "" },
            { name: "컷 전환 가능", desc: "" },
            { name: "조작 제한 가능", desc: "" }
          ],
          refs: [
            { label: "Stellar Blade Bosses", url: "https://www.youtube.com/watch?v=BvxRAjJYHdw" },
            { label: "Space Marine Sorcerer Execution", url: "https://www.youtube.com/watch?v=LnF441uToA4" }
          ]
        }
      ]
    },
    {
      n: 22, title: "추천 카메라 방향",
      intro: "평상시에는 스페이스마린2처럼 육중한 3인칭 숄더 카메라를 사용하고, 정밀 전투 순간에는 스텔라블레이드처럼 빠르게 타겟 중심 카메라로 조여지는 방식이 좋음.",
      groups: [
        {
          sub: "기본 구조",
          items: [
            { name: "기본 이동", desc: "낮은 후방 3인칭 카메라." },
            { name: "일반 전투", desc: "약간 높은 후방 카메라 + 넓은 FOV." },
            { name: "강적/보스전", desc: "타겟 중심 락온 카메라." },
            { name: "패링/저스트 회피", desc: "짧은 슬로우 + 미세 줌 인." },
            { name: "다수전", desc: "카메라 줌 아웃 + 후방 위협 보정." },
            { name: "처형", desc: "짧고 강한 시네마틱 카메라." },
            { name: "궁극기", desc: "1~2초 이내의 강한 연출 카메라." },
            { name: "협동 플레이", desc: "개인 카메라 연출은 허용하되, 전체 시간 정지는 최소화." }
          ],
          refs: [
            { label: "Space Marine Full Game", url: "https://www.youtube.com/watch?v=nSPUTjCcNj0" },
            { label: "Stellar High Action", url: "https://www.youtube.com/watch?v=NaOLWyuWOtw" },
            { label: "GoWR NG+ High Action", url: "https://www.youtube.com/watch?v=fNQV1rDU3jo" }
          ]
        }
      ]
    },
    {
      n: 23, title: "우선 제작 핵심 카메라 세트",
      intro: "모든 카메라를 한 번에 만들기보다, 아래 순서로 프로토타입을 잡는 것이 좋음.",
      groups: [
        {
          sub: "1순위",
          items: [
            { name: "기본 이동 카메라", desc: "" }, { name: "기본 근접 전투 카메라", desc: "" },
            { name: "기본 사격 카메라", desc: "" }, { name: "락온 카메라", desc: "" },
            { name: "다수전 줌 아웃 카메라", desc: "" }, { name: "패링/저스트 회피 카메라", desc: "" },
            { name: "처형 카메라", desc: "" }, { name: "보스전 카메라", desc: "" }
          ]
        },
        {
          sub: "2순위",
          items: [
            { name: "강공격 카메라", desc: "" }, { name: "스킬 카메라", desc: "" },
            { name: "궁극기 카메라", desc: "" }, { name: "피격 카메라", desc: "" },
            { name: "대형 적 카메라", desc: "" }, { name: "환경 충돌 보정 카메라", desc: "" },
            { name: "협동 플레이 카메라", desc: "" }, { name: "미션 진입/완료 카메라", desc: "" }
          ]
        },
        {
          sub: "3순위",
          items: [
            { name: "컷신 연동 카메라", desc: "" }, { name: "특수 지형 카메라", desc: "" },
            { name: "오브젝트 상호작용 카메라", desc: "" }, { name: "전장 공개 카메라", desc: "" },
            { name: "보스 페이즈 전환 카메라", desc: "" }, { name: "공동 처형 카메라", desc: "" },
            { name: "탈출/추격 카메라", desc: "" }, { name: "사망/부활 카메라", desc: "" }
          ]
        }
      ]
    },
    {
      n: 24, title: "최종 카메라 설계 키워드",
      intro: "스페이스마린2처럼 무겁고 전장감 있는 3인칭 카메라를 기본으로 하되, 스텔라블레이드처럼 패링·회피·카운터·보스전 순간에는 빠르고 날카롭게 반응하는 스타일리쉬 액션 카메라를 적용함. 가장 적합한 방향은 「육중한 전장 카메라 70% + 스타일리쉬 정밀 액션 카메라 30%」.",
      groups: [
        {
          sub: "핵심 5키워드",
          items: [
            { name: "무게감", desc: "캐릭터 체급, 장비, 전장의 압박을 보여줘야 함." },
            { name: "속도감", desc: "대시, 회피, 콤보, 카운터가 답답하지 않아야 함." },
            { name: "가독성", desc: "다수 적, 후방 위협, 보스 패턴이 항상 읽혀야 함." },
            { name: "타격감", desc: "히트 스톱, 줌, 쉐이크, 슬로우가 공격 판정과 정확히 맞아야 함." },
            { name: "반복 피로도 제어", desc: "처형과 궁극기는 멋있어야 하지만 너무 길면 안 됨." }
          ],
          refs: [
            { label: "Space Marine 2 공식 페이지", url: "https://www.focus-entmt.com/en-us/games/warhammer-40000-space-marine-2" },
            { label: "Stellar Blade 공식 페이지", url: "https://www.playstation.com/ko-kr/games/stellar-blade/" }
          ]
        }
      ]
    }
  ]
};
