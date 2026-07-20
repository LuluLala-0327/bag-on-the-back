/* 연출팀 — 연출 파트 비주얼 레퍼런스 (별도 페이지)
 * ────────────────────────────────────────────────────────────────────────
 * 콘텐츠 종류 3가지를 지원. item 또는 group 에 넣을 수 있음.
 *   · 컬러칩 : chips:CH([["#RRGGBB","이름"], ...])   → CSS 색상값 스와치(이미지 아님, 어디서든 실제 색)
 *   · 이미지 : imgs:IMG([["설명","이미지URL","(선택)클릭시링크"], ...])  → 클릭 시 라이트박스로 크게 보기
 *   · 영상   : refs:R([["라벨","유튜브ID",시작초], ...])  또는  ["라벨",null,"외부URL"]
 *
 * item  : I("이름","설명",{chips:..., imgs:..., refs:...})
 * group : {sub:"소제목", note:"메모", layout:"table"?, items:[...], chips:CH(...), imgs:IMG(...), refs:R(...)}
 *   - layout:"table" → items 를 [이미지 | 내용] 표로 렌더 (item.imgs[0] 이 표의 이미지)
 *
 * ▣ 이미지 넣는 법: directing/img/ 폴더에 파일을 올리고 아래 경로만 맞추면 됨.
 *   현재 배선된 파일명 → img/keyshot-1.jpg, img/keyshot-2.jpg, img/keyshot-3.jpg, img/tree-mech-1.jpg
 *   (다른 이름/확장자로 올렸다면 아래 src 문자열만 바꾸면 됨. 외부 URL 도 그대로 사용 가능.)
 * ──────────────────────────────────────────────────────────────────────── */
(function(){
  var Y="https://www.youtube.com/watch?v=";
  function R(list){ return list.map(function(r){
    if(r[1]===null) return {label:r[0], url:r[2]};
    var st=r[2]||0; return {label:r[0], url:Y+r[1]+(st?("&t="+st+"s"):""), id:r[1], start:st};
  }); }
  function IMG(list){ return list.map(function(m){ return {label:m[0], src:m[1], link:m[2]||m[1]}; }); }
  function CH(list){ return list.map(function(c){ return {hex:c[0], name:c[1]||''}; }); }
  function I(name,desc,x){ x=x||{}; return {name:name, desc:desc, refs:R(x.refs||[]), imgs:IMG(x.imgs||[]), chips:CH(x.chips||[])}; }

  window.REF_DATA = {
    meta:{
      title:"연출팀",
      lead:"연출 파트 비주얼 레퍼런스 — ① 포레스트 컬러칩(CSS 색상값), ② 키샷(이미지+연출 의도), ③ 기계부품 나무 레퍼런스. 기획팀 페이지와 별도로 정리(추후 카테고리로 통합 가능).",
      overviewDesc:"Forest Color Chips · 키샷 · 나무 레퍼런스"
    },

    sections:[

    /* ═════════ 01 Forest Color Chips ═════════ */
    {n:1,title:"Forest Color Chips",
      intro:"장면의 기준 팔레트. 각 칩은 이미지가 아니라 CSS 색상값(HEX)으로 표기되어, 어느 환경·기기에서도 실제 색으로 정확히 표시됩니다.",
      groups:[
      {sub:"포레스트 다크 팔레트", note:"어두운 값 → 밝은 값 순 · HEX 그대로 사용 가능",
        chips:CH([
          ["#030405","VOID BLACK"],
          ["#0B0C0D","WET CHARCOAL"],
          ["#101316","MECH BARK"],
          ["#151A1F","MUD SHADOW"],
          ["#1B2229","BLUE BLACK"],
          ["#2B3643","STEEL FOG"],
          ["#344150","DEEP MIST"],
          ["#62758A","HUMID FOG"]
        ])
      }
    ]},

    /* ═════════ 02 키샷 (이미지 + 내용 표) ═════════ */
    {n:2,title:"키샷",
      intro:"핵심 장면(키샷) 레퍼런스. 이미지와 연출 의도를 한 표에서 확인. 이미지를 클릭하면 크게 볼 수 있습니다.",
      groups:[
      {sub:"키샷 S1 – S3", note:"이미지 클릭 시 상세 보기(확대)", layout:"table",
        items:[
          I("S1 · 원시림 진입 / 스케일",
            "초반부의 숲은 멀리서 보면 거대한 원시림이지만, 가까이 접근할수록 나무의 내부가 케이블과 배관, 척추와 혈관 같은 구조로 이루어져 있다는 사실이 드러나는 공간입니다.\n대원들은 이 공간을 정복하거나 탐험하는 주체라기보다, 거대한 존재의 내부로 들어가는 작은 이물질처럼 보이도록 스케일을 잡았습니다.\n명확한 길이나 외부 광원은 없고, 습기가 가득한 짙은 안개를 이용해 숲이 끝없이 이어지는 깊은 느낌을 줍니다.",
            {imgs:IMG([["키샷 S1 · 원시림 진입","img/keyshot-1.jpg"]])}),
          I("S2 · 압박 / 기괴함",
            "· 숲이 대원들을 감싸고 압박하는 느낌\n· 복잡한 상부 실루엣\n· 생명체의 내부처럼 보이는 기괴함\n· 공포와 미지의 공간이라는 인상",
            {imgs:IMG([["키샷 S2 · 압박/기괴함","img/keyshot-2.jpg"]])}),
          I("S3 · 무채색 + 붉은 코어",
            "전체는 거의 무채색의 블루그레이 톤이며, 대원들의 붉은 코어만 유일한 컬러 포인트로 사용했습니다.\n붉은 빛은 안개와 젖은 바닥에서 제한적으로 산란하며, 이후 코어와 숲의 관계를 암시하는 시각적 단서가 됩니다.",
            {imgs:IMG([["키샷 S3 · 붉은 코어","img/keyshot-3.jpg"]])})
        ]
      }
    ]},

    /* ═════════ 03 나무 레퍼런스 (최하단) ═════════ */
    {n:3,title:"나무 레퍼런스",
      intro:"기계 부품으로 구성된 나무 레퍼런스. 케이블·배관·주름관이 척추·혈관 같은 유기적 구조와 결합된 형태.",
      groups:[
      {sub:"기계부품 나무", note:"이미지 클릭 시 상세 보기(확대)",
        items:[
          I("기계부품 나무","기계 부품(케이블·배관·주름관)으로 이루어진 나무 기둥과 뿌리. 유기적 실루엣 + 인공 구조의 결합으로 '거대한 존재의 내부'라는 인상을 만든다.",
            {imgs:IMG([["기계부품 나무","img/tree-mech-1.jpg"]])})
        ]
      }
    ]}

    ]
  };

  window.REF_DATA.footer = {
    big:"연출 파트 ·<br>비주얼 레퍼런스",
    sub:"포레스트 컬러칩(CSS 색상값) · 키샷 · 기계부품 나무 레퍼런스. 기획팀 설정 파트 레퍼와 별도 페이지로 관리."
  };
})();
