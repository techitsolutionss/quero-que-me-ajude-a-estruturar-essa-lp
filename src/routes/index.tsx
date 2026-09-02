import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  CosmicBackdrop,
  Constellation,
  DividerMark,
  Enneagram,
  SacredArt,
  Section,
  Sparkle,
  Twinkles,
  useReveal,
} from "@/components/lp/Cosmic";
import capa from "@/assets/capa-livro.jpg.asset.json";
import autora from "@/assets/cecilia-correa.png.asset.json";

const TITLE = "Eneagrama Além das Personalidades — Cecilïa Corŕëa";
const DESC =
  "O Eneagrama pode revelar muito mais do que o seu tipo de personalidade. Livro + bônus exclusivos para os 100 primeiros leitores.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="relative text-paper">
      <CosmicBackdrop />
      <TopLine />
      <Hero />
      <Opening />
      <Quote tone="purple" text="Talvez o despertar da nossa verdade espiritual consista em reconhecer que aquilo que buscamos jamais deixou de habitar quem somos." />
      <Strategy />
      <Quote tone="gold" text='E talvez a pergunta mais importante agora não seja "Qual é o meu tipo?", mas "Quem eu me torno quando deixo de ser governado por ele?" A jornada da sua verdade espiritual começa quando o Eneagrama deixa de ser estudado e passa a ser vivido.' />
      <Travessia />
      <Estrutura />
      <Quote tone="purple" text="O Eneagrama não foi criado para que você enxergue o ego dos outros. Ele foi criado para que você reconheça o seu, antes que ele use até o próprio Eneagrama para permanecer no comando." />
      <Autora />
      <Oferta />
      <FinalCta />
      <Faq />
      <footer className="relative border-t border-line py-8 text-center text-[12px] tracking-[0.08em] text-paper-dim">
        <div className="wrap">Eneagrama Além das Personalidades · Cecilïa Corŕëa · Escola Brasileira de Eneagrama</div>
      </footer>
    </main>
  );
}

/* ================= TOP LINE ================= */
function TopLine() {
  return (
    <div className="relative z-10 border-b border-line py-5">
      <div className="wrap flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-serif text-[14px] italic tracking-[0.02em] text-gold-2">
          <Enneagram className="h-5 w-5" />
          Escola Brasileira de Eneagrama
        </div>
        <div className="text-[11.5px] tracking-[0.12em] text-paper-dim">LANÇAMENTO EDITORIAL</div>
      </div>
    </div>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <Twinkles count={18} color="gold" />
      <Enneagram
        numbers
        className="pointer-events-none absolute -right-[12%] -top-[10%] w-[min(90vw,760px)] animate-spin-slow text-gold-2 opacity-[0.12]"
      />
      <Enneagram className="pointer-events-none absolute -bottom-[30%] -left-[18%] w-[520px] animate-spin-slower text-purple-2 opacity-[0.14]" />
      <Constellation className="pointer-events-none absolute left-[6%] top-[12%] w-[220px] text-teal-2 opacity-60" />
      <div className="orb left-[-8%] top-[10%] h-[420px] w-[420px] bg-[radial-gradient(circle,oklch(0.65_0.13_295/50%),transparent_70%)]" />
      <div className="orb bottom-[-10%] right-[10%] h-[380px] w-[380px] bg-[radial-gradient(circle,oklch(0.83_0.1_88/40%),transparent_70%)] [animation-delay:3s]" />

      <div className="wrap relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow animate-rise text-[17px]">Quem é você além da sua personalidade?</p>
          <h1
            className="mb-6 font-serif font-normal leading-[1.1] tracking-[-0.01em] animate-rise [animation-delay:120ms]"
            style={{ fontSize: "clamp(38px, 5.4vw, 60px)" }}
          >
            O Eneagrama pode revelar <em className="text-gradient-gold animate-shimmer not-italic italic">muito mais</em> do que o seu tipo de personalidade.
          </h1>
          <p className="mb-9 max-w-[480px] text-[18.5px] text-paper-dim animate-rise [animation-delay:240ms]">
            Ele pode ser o mapa para o resgate da sua <strong className="font-medium text-paper">verdadeira identidade</strong>, e para voltar a ser quem você realmente é.
          </p>
          <div className="animate-rise [animation-delay:360ms]">
            <a href="#oferta" className="btn-cta">QUERO COMEÇAR MINHA TRAVESSIA →</a>
            <p className="mt-4 text-[13px] tracking-[0.02em] text-paper-dim">Livro + bônus exclusivos para os 100 primeiros leitores</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["24", "CAPÍTULOS"],
                ["3", "PARTES DA JORNADA"],
                ["+300", "PÁGINAS"],
                ["15+", "ANOS DE ESTUDO"],
              ].map(([n, l]) => (
                <div key={l} className="glass rounded-sm px-4 py-3 text-center">
                  <div className="font-serif text-[26px] leading-none text-gold-2">{n}</div>
                  <div className="mt-1.5 text-[10px] tracking-[0.14em] text-paper-dim">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-6 animate-rise [animation-delay:400ms]" style={{ perspective: 1400 }}>
          <div className="absolute h-[420px] w-[420px] animate-halo rounded-full bg-[radial-gradient(circle,oklch(0.65_0.13_295/45%),oklch(0.83_0.1_88/15%)_45%,transparent_70%)] blur-2xl" />
          <Enneagram className="absolute h-[460px] w-[460px] animate-spin-slow text-gold-2 opacity-30" />
          <div className="relative w-[250px] animate-float-book rounded-[3px] border border-gold/40 shadow-[var(--shadow-book)] md:w-[290px]">
            <div className="absolute -right-3 top-6 z-10 rotate-90 rounded-sm bg-gold px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-ink shadow-[var(--shadow-gold)]">
              LANÇAMENTO
            </div>
            <div className="overflow-hidden rounded-[3px]">
              <img src={capa.url} alt="Eneagrama Além das Personalidades — capa do livro" width={1260} height={1810} className="block w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= OPENING ================= */
function Opening() {
  return (
    <Section tone="aurora" className="py-20">
      <div className="orb -left-[100px] -top-[80px] h-[340px] w-[340px] bg-[radial-gradient(circle,oklch(0.8_0.12_180/60%),transparent_70%)]" />
      <div className="orb -bottom-[100px] -right-[60px] h-[260px] w-[260px] bg-[radial-gradient(circle,oklch(0.65_0.13_295/45%),transparent_70%)] [animation-delay:3s]" />
      <Constellation className="pointer-events-none absolute right-[4%] top-[18%] w-[260px] text-gold-2 opacity-50" />
      <div className="wrap-narrow relative z-10 reveal">
        <p className="max-w-[540px] font-serif text-[22px] leading-[1.55] md:text-[25px]">
          Você descobriu seu tipo. Entendeu seus padrões. E até compreendeu muito sobre si.{" "}
          <span className="italic text-gold-2">Mas, ainda assim, continua repetindo os mesmos ciclos.</span>
        </p>
      </div>
    </Section>
  );
}

/* ================= QUOTE ================= */
function Quote({ text, tone }: { text: string; tone: "purple" | "gold" }) {
  return (
    <Section tone={tone} className="py-24 text-center">
      <div className="stars-layer" />
      <Twinkles count={10} color={tone} />
      <SacredArt className="pointer-events-none absolute left-1/2 top-1/2 w-[560px] -translate-x-1/2 -translate-y-1/2 animate-spin-slower opacity-[0.10]" />
      <div className="wrap-narrow relative z-10 reveal">
        <DividerMark className={`mx-auto mb-8 w-[120px] ${tone === "gold" ? "text-gold-2" : "text-purple-2"}`} />
        <p className="mx-auto max-w-[640px] font-serif italic leading-[1.5]" style={{ fontSize: "clamp(21px, 3.2vw, 29px)" }}>
          {text}
        </p>
        <cite className="mt-6 block text-[12px] not-italic tracking-[0.12em] text-paper-dim">TRECHO DO LIVRO</cite>
      </div>
    </Section>
  );
}

/* ================= STRATEGY ================= */
const chips = [
  "\u201cEu sempre fui assim.\u201d",
  "\u201cEu sou perfeccionista.\u201d",
  "\u201cEu preciso ter controle.\u201d",
  "\u201cEu sou muito ansioso.\u201d",
  "\u201cEu gosto de ajudar os outros.\u201d",
  "\u201cEu sou intensa mesmo.\u201d",
  "\u201cEu funciono melhor sozinho.\u201d",
  "\u201cEu sou emocionada.\u201d",
];

function Strategy() {
  return (
    <Section className="py-24 md:py-28">
      <Enneagram className="pointer-events-none absolute -left-[10%] top-[10%] w-[520px] animate-spin-slow text-teal-2 opacity-[0.12]" />
      <Twinkles count={12} color="purple" />
      <div className="wrap-narrow relative z-10 reveal">
        <p className="eyebrow">A estratégia que virou identidade</p>
        <h2 className="h-display mb-6 max-w-[640px]">
          E se parte daquilo que você chama de "seu jeito de ser" for, na verdade, uma estratégia que um dia foi necessária para sobreviver?
        </h2>
        <p className="max-w-[560px] text-[17.5px] text-paper-dim">O problema começa quando essa estratégia vira sua identidade.</p>
      </div>

      <div className="relative z-10 my-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {[...chips, ...chips].map((c, i) => (
            <span
              key={i}
              className={`whitespace-nowrap rounded-full border px-5 py-3 font-serif text-[15px] italic ${
                i % 3 === 2 ? "border-purple-2/40 text-purple-2" : i % 4 === 3 ? "border-gold/40 text-gold-2" : "border-line-strong text-paper-dim"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap-narrow relative z-10 reveal">
        <p className="max-w-[560px] border-l-2 border-gold bg-[linear-gradient(90deg,oklch(0.74_0.11_85/8%),transparent)] px-7 py-7 font-serif text-[19px] italic leading-[1.5]">
          O Eneagrama ficou famoso por mapear 9 tipos de personalidade, e faz isso com precisão impressionante. Mas existe uma pergunta que a maioria dos livros e cursos sobre o tema nunca faz: e depois de identificar o tipo, o que muda de verdade?
        </p>
      </div>
    </Section>
  );
}

/* ================= TRAVESSIA ================= */
const steps = [
  "Descobri meu tipo e reconheci meus padrões",
  "Ressignifiquei minhas feridas e traumas da infância",
  "Reconheci e integrei minha sombra",
  "Voltei para minha essência e resgatei minha identidade",
];
const insights = [
  { n: "01", tint: "gold", h: "Você não é a personalidade que construiu para sobreviver", p: "A personalidade pode ter sido uma resposta inteligente a uma dor, uma falta e um medo, mas não precisa continuar governando sua identidade." },
  { n: "02", tint: "purple", h: "Conhecer seu tipo é o começo. Desidentificar-se dele é o caminho.", p: "O Eneagrama deixa de ser uma explicação sobre você e passa a ser um mapa de retorno para a sua verdade." },
  { n: "03", tint: "purple", h: "A sombra não é sua inimiga", p: "Um capítulo inteiro sobre a arquitetura da sombra de cada tipo. Aquilo que foi reprimido também pode guardar partes importantes daquilo que você é." },
  { n: "04", tint: "gold", h: "O ego pode sequestrar até o seu processo de despertar", p: "O aprendizado mais ousado da obra: existe uma espiritualidade que usa conhecimento e discursos elevados para continuar evitando aquilo que precisa ser visto." },
  { n: "05", tint: "purple", wide: true, h: "Sua realidade começa a mudar quando sua consciência muda", p: "Um livro que conecta Eneagrama, expansão da consciência, leis universais, espiritualidade, frequência vibracional e manifestação de uma nova realidade em uma jornada de transformação real." },
] as const;

function Travessia() {
  return (
    <Section tone="purple" className="py-24 md:py-28">
      <div className="orb -right-[140px] top-[60px] h-[380px] w-[380px] bg-[radial-gradient(circle,oklch(0.6_0.15_295/60%),transparent_70%)]" />
      <div className="orb -left-[120px] bottom-[100px] h-[300px] w-[300px] bg-[radial-gradient(circle,oklch(0.8_0.12_80/35%),transparent_70%)] [animation-delay:4.5s]" />
      <SacredArt className="pointer-events-none absolute -right-[200px] top-[30%] w-[720px] animate-spin-slower opacity-[0.09]" />
      <Twinkles count={14} color="gold" />

      <div className="wrap relative z-10">
        <div className="reveal">
          <p className="eyebrow">A travessia</p>
          <h2 className="h-display mb-7 max-w-[640px]">
            Este não é mais um livro sobre tipos de personalidade, mas sobre a jornada que começa quando você vai além deles.
          </h2>
        </div>

        <ol className="relative mt-12 pl-9 reveal">
          <span className="absolute bottom-1.5 left-[9px] top-1.5 w-px bg-[linear-gradient(180deg,var(--purple-2),var(--gold),transparent_95%)]" />
          {steps.map((s) => (
            <li key={s} className="relative pb-10 last:pb-0">
              <span className="absolute -left-9 top-0.5 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-gold bg-ink">
                <span className="h-[7px] w-[7px] rounded-full bg-gold-2" />
              </span>
              <span className="font-serif text-[18px]">{s}</span>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 reveal">
          {insights.map((it) => (
            <article
              key={it.n}
              className={`relative overflow-hidden px-8 pb-8 pt-10 ${"wide" in it && it.wide ? "md:col-span-2" : ""} ${
                it.tint === "gold"
                  ? "bg-[linear-gradient(160deg,oklch(0.45_0.08_75/30%),oklch(0.14_0.03_225/60%))]"
                  : "bg-[linear-gradient(160deg,oklch(0.4_0.12_295/35%),oklch(0.14_0.03_225/60%))]"
              }`}
            >
              <span className="pointer-events-none absolute -top-5 right-2 select-none font-serif text-[108px] font-semibold leading-none text-transparent [-webkit-text-stroke:1px_oklch(0.74_0.11_85/22%)]">
                {it.n}
              </span>
              <span className="mb-4 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line-strong bg-paper/5">
                <Sparkle className={`h-4 w-4 ${it.tint === "gold" ? "text-gold-2" : "text-purple-2"}`} />
              </span>
              <h3 className="relative mb-3 max-w-[480px] font-serif text-[21px] font-medium">{it.h}</h3>
              <p className="relative max-w-[480px] text-[15.5px] text-paper-dim">{it.p}</p>
            </article>
          ))}
        </div>

        {/* layers figure */}
        <div className="mt-20 text-center reveal">
          <svg viewBox="0 0 200 200" className="mx-auto h-[230px] w-[230px]" fill="none" aria-hidden>
            {[92, 74, 56, 38, 20].map((r, i) => (
              <circle
                key={r}
                cx="100"
                cy="100"
                r={r}
                stroke={i % 2 ? "var(--purple-2)" : "var(--gold-2)"}
                strokeOpacity={0.35 + i * 0.12}
                strokeWidth="0.8"
                strokeDasharray={i === 0 ? "3 5" : undefined}
              />
            ))}
            <circle cx="100" cy="100" r="6" fill="var(--gold-2)" />
            <circle cx="100" cy="100" r="14" fill="var(--gold-2)" fillOpacity="0.25" />
          </svg>
          <p className="mx-auto mt-6 max-w-[440px] font-serif text-[14.5px] italic leading-[1.6] text-paper-dim">
            "Assim como em uma cebola, quanto mais camadas você rompe, mais perto chega ao centro. Desconstruir essas estruturas psíquicas exige mais do que autoconhecimento. Exige amor. Exige presença."
          </p>
        </div>

        {/* open book spread */}
        <div className="mt-20 reveal">
          <div className="glass grid overflow-hidden rounded-sm md:grid-cols-2">
            <div className="relative border-b border-line p-10 md:border-b-0 md:border-r">
              <div className="mb-5 text-[11px] tracking-[0.16em] text-gold-2">EPÍGRAFE DA OBRA</div>
              <p className="font-serif text-[24px] italic leading-[1.4]">
                "E conhecereis a verdade, e a verdade vos libertará."
                <cite className="mt-4 block text-[11px] not-italic tracking-[0.16em] text-paper-dim">JOÃO 8:32</cite>
              </p>
              <Enneagram className="absolute -bottom-10 -left-10 w-[200px] text-gold-2 opacity-10" />
            </div>
            <div className="p-10">
              <div className="mb-5 text-[11px] tracking-[0.16em] text-gold-2">O QUE VOCÊ VAI PERCORRER</div>
              <ul className="space-y-5">
                {[
                  ["I", "A Base da Sua Verdade Espiritual", "As estruturas que construíram quem você acredita ser"],
                  ["II", "A Jornada da Sua Verdade Espiritual", "Expandir a consciência para além dessas estruturas"],
                  ["III", "O Despertar da Sua Verdade Espiritual", "Voltar para aquilo que sempre esteve em você"],
                ].map(([r, t, d]) => (
                  <li key={r} className="flex gap-4">
                    <span className="w-8 shrink-0 font-serif text-[18px] text-gold-2">{r}</span>
                    <span>
                      <strong className="block font-serif text-[17px] font-medium">{t}</strong>
                      <span className="text-[14px] text-paper-dim">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================= ESTRUTURA ================= */
const parts = [
  ["PARTE 1", "A Base da Sua Verdade Espiritual", "Reconhecer as estruturas que construíram quem você acredita ser: Eneagrama além das personalidades, psique humana, centros de inteligência, os 9 tipos, instintos, asas e flechas."],
  ["PARTE 2", "A Jornada da Sua Verdade Espiritual", "Expandir a consciência para além dessas estruturas: consciência e identidade, frequência vibracional, a Mandala do Eneagrama, as Leis Universais, manifestação consciente."],
  ["PARTE 3", "O Despertar da Sua Verdade Espiritual", "Voltar para aquilo que sempre esteve em você: o ego que sequestra a verdade, o Éden da consciência, a sombra como portal, o fim da autoescravidão e a expressão da consciência."],
];
const discoveries = [
  "Por que aquilo que você chama de personalidade pode ter começado como uma estratégia de sobrevivência",
  "Por que conhecer seus padrões não significa necessariamente estar livre deles",
  "Como o ego pode usar até o autoconhecimento para continuar no controle",
  "Por que a sombra precisa ser integrada, e não eliminada",
  "Como sair da reação automática para uma consciência mais observadora",
  "Como utilizar o Eneagrama para criar sua própria realidade a partir de uma perspectiva mais ampla",
];
const notFor = [
  "quer apenas descobrir seu tipo",
  "procura uma explicação rápida para seus comportamentos",
  "procura uma espiritualidade que permita evitar emoções desconfortáveis",
  "quer uma nova técnica para usar com outras pessoas, sem olhar para os próprios padrões",
];
const yesFor = [
  "sente que já entendeu muita coisa sobre você e ainda continua repetindo padrões",
  "percebe que seu tipo de personalidade não explica tudo sobre você",
  "quer aprofundar como usar o Eneagrama no seu dia a dia",
  "sente que existe algo além daquilo que aprendeu sobre luz e sombra",
  "está disposto a navegar em mares profundos do autoconhecimento com mais honestidade",
];

function Estrutura() {
  return (
    <Section tone="teal" className="py-24 md:py-28">
      <div className="orb -right-[100px] -top-[60px] h-[360px] w-[360px] bg-[radial-gradient(circle,oklch(0.8_0.12_180/55%),transparent_70%)]" />
      <div className="orb -left-[110px] bottom-[200px] h-[280px] w-[280px] bg-[radial-gradient(circle,oklch(0.8_0.12_80/35%),transparent_70%)] [animation-delay:2s]" />
      <Enneagram numbers className="pointer-events-none absolute -left-[160px] top-[8%] w-[560px] animate-spin-slower text-gold-2 opacity-[0.10]" />
      <Constellation className="pointer-events-none absolute bottom-[10%] right-[6%] w-[260px] text-purple-2 opacity-60" />
      <Twinkles count={12} color="teal" />

      <div className="wrap relative z-10">
        <div className="reveal">
          <p className="eyebrow">A estrutura da obra</p>
          <h2 className="h-display mb-7 max-w-[640px]">
            Você irá trilhar um caminho de dentro para fora, em 24 capítulos organizados em 3 etapas fundamentais.
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3 reveal">
          {parts.map(([l, h, p], i) => (
            <div key={l} className="relative overflow-hidden bg-ink/85 p-8">
              <span className="pointer-events-none absolute -bottom-6 -right-2 font-serif text-[120px] leading-none text-gold-2 opacity-[0.07]">{i + 1}</span>
              <div className="mb-3 text-[11.5px] tracking-[0.14em] text-gold-2">{l}</div>
              <h3 className="mb-3 font-serif text-[22px] font-medium">{h}</h3>
              <p className="text-[15px] text-paper-dim">{p}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 reveal">
          <p className="eyebrow">Ao longo dessa travessia, você vai descobrir</p>
          <ul>
            {discoveries.map((d) => (
              <li key={d} className="relative border-t border-line py-4 pl-8 text-[16px] last:border-b">
                <Sparkle className="absolute left-0 top-[22px] h-3.5 w-3.5 text-gold-2" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 reveal">
          <p className="eyebrow mb-3">Talvez este livro não seja para você</p>
          <p className="max-w-[560px] text-[17.5px] text-paper-dim">Este livro provavelmente não é para você se você...</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="glass rounded-sm p-7">
              <h3 className="mb-4 font-serif text-[19px] font-medium text-paper-dim">Provavelmente não é para você se você...</h3>
              <ul className="space-y-3">
                {notFor.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-paper-dim">
                    <span className="mt-[9px] h-px w-4 shrink-0 bg-paper-dim/60" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-sm border border-gold/40 bg-[linear-gradient(160deg,oklch(0.74_0.11_85/12%),oklch(0.14_0.03_225/55%))] p-7 shadow-[var(--shadow-gold)]">
              <h3 className="mb-4 font-serif text-[19px] font-medium text-gold-2">Mas talvez seja para você se você...</h3>
              <ul className="space-y-3">
                {yesFor.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px]">
                    <Sparkle className="mt-[5px] h-3.5 w-3.5 shrink-0 text-gold-2" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 border-l-2 border-teal-2 bg-teal/20 px-6 py-4 font-serif text-[16px] italic">
            Não é necessário conhecer o Eneagrama para aproveitar a leitura. O livro guia do básico ao profundo.
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================= AUTORA ================= */
function Autora() {
  return (
    <Section tone="gold" className="py-24 md:py-28">
      <div className="orb -left-[90px] top-[40px] h-[320px] w-[320px] bg-[radial-gradient(circle,oklch(0.8_0.12_80/55%),transparent_70%)]" />
      <div className="orb -bottom-[80px] -right-[80px] h-[260px] w-[260px] bg-[radial-gradient(circle,oklch(0.6_0.15_295/35%),transparent_70%)] [animation-delay:5s]" />
      <div className="stars-layer" />
      <SacredArt className="pointer-events-none absolute -left-[220px] bottom-[-120px] w-[640px] animate-spin-slow opacity-[0.10]" />
      <Twinkles count={10} color="gold" />

      <div className="wrap relative z-10">
        <div className="reveal">
          <p className="eyebrow">Sobre a autora</p>
          <p className="mb-12 max-w-[640px] text-[17.5px] text-paper-dim">
            Fruto de mais de 15 anos de estudo, prática e vivência do Eneagrama, esta obra reflete a certeza de que a verdade espiritual não está retida na teoria. Ela habita a vida de quem se atreve a mergulhar em si mesmo.
          </p>
        </div>
        <div className="grid items-start gap-12 md:grid-cols-[320px_1fr] reveal">
          <div className="relative mx-auto w-[280px] md:w-full">
            <span className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-gold-2" />
            <span className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-gold-2" />
            <div className="absolute -inset-6 -z-10 animate-halo rounded-full bg-[radial-gradient(circle,oklch(0.83_0.1_88/35%),transparent_70%)] blur-2xl" />
            <div className="overflow-hidden rounded-sm border border-gold/30 shadow-[var(--shadow-book)]">
              <img src={autora.url} alt="Cecilïa Corŕëa" width={896} height={1152} loading="lazy" className="block w-full" />
            </div>
          </div>
          <div>
            <div className="font-serif text-[34px] leading-tight">Cecilïa Corŕëa</div>
            <div className="mt-2 text-[13px] leading-relaxed tracking-[0.04em] text-gold-2">
              Mentora Existencial · Especialista em Reinvenção Pessoal e Profissional
              <br />
              Idealizadora e Fundadora da Escola Brasileira de Eneagrama
            </div>
            <div className="mt-6 space-y-4 text-[15.5px] text-paper-dim">
              <p>
                <strong className="font-medium text-paper">A trajetória:</strong> Engenheira Agrônoma pela USP, atuou por 17 anos em cargos de liderança no agronegócio. Há 10 anos, deixou a carreira corporativa para se dedicar integralmente a um processo profundo de autoconhecimento e transformação.
              </p>
              <p>
                <strong className="font-medium text-paper">A atuação hoje:</strong> como escritora, mentora, treinadora e fundadora da Escola Brasileira de Eneagrama, é reconhecida por aplicar e transmitir a sabedoria do Eneagrama como instrumento de expansão de consciência, indo além da mera classificação de personalidades.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line">
              {[
                ["15+", "anos de estudo e prática do Eneagrama"],
                ["5.000+", "alunos formados pela Escola Brasileira de Eneagrama"],
                ["17", "anos de liderança no agronegócio"],
                ["10", "anos dedicados integralmente à obra e à mentoria"],
              ].map(([n, l]) => (
                <div key={l} className="bg-ink/80 p-5">
                  <div className="font-serif text-[30px] leading-none text-gold-2">{n}</div>
                  <div className="mt-2 text-[12.5px] text-paper-dim">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================= OFERTA ================= */
const gifts = [
  { n: 1, tag: "LIVRO FÍSICO AUTOGRAFADO", h: "Eneagrama Além das Personalidades", p: "+300 páginas para você ir além da sua personalidade e despertar a sua verdade espiritual, autografado pela própria Cecilïa." },
  { n: 2, tag: "BÔNUS EXCLUSIVO", h: 'Curso on-line "A Luz do Eneagrama na Sua Jornada Espiritual"', p: "8 horas de aulas gravadas para aprofundar os conceitos da obra.", detail: "As Leis Universais que regem a Sabedoria do Eneagrama · A formação da psique humana, da criança anímica à cristalização dos padrões · Os 3 centros de inteligência · Os 3 instintos de sobrevivência · Os 9 mapas da psique humana sob a luz do Eneagrama · Movimentos de flechas para integração da criança anímica · A autoconsciência das virtudes e ideias divinas da essência humana" },
  { n: 3, tag: "BÔNUS EXCLUSIVO", h: "Combo Livros Eneagrama (PDF, download imediato)", p: "Para você continuar estudando e praticando.", detail: "Eneagrama: Um Presente para a Humanidade · Eneagrama Integrativo · Eneagrama no Seu Dia a Dia + Workbook do Método S.O.L.A.R + Caderno da Gratidão" },
];

function Oferta() {
  return (
    <Section id="oferta" tone="purple" className="py-24 md:py-28">
      <div className="orb -right-[100px] -top-[70px] h-[340px] w-[340px] bg-[radial-gradient(circle,oklch(0.6_0.15_295/60%),transparent_70%)]" />
      <div className="orb -left-[100px] bottom-[120px] h-[280px] w-[280px] bg-[radial-gradient(circle,oklch(0.8_0.12_80/35%),transparent_70%)] [animation-delay:3.5s]" />
      <div className="stars-layer" />
      <Enneagram numbers className="pointer-events-none absolute -right-[180px] bottom-[5%] w-[600px] animate-spin-slow text-gold-2 opacity-[0.10]" />
      <Twinkles count={16} color="gold" />

      <div className="wrap-narrow relative z-10">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-1.5 text-[11px] font-medium tracking-[0.14em] text-gold-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-2" />
            OFERTA ESPECIAL DE LANÇAMENTO
          </span>
          <h2 className="h-display mb-4 mt-6">Os 100 primeiros compradores recebem</h2>
          <p className="text-[17.5px] text-paper-dim">
            1 exemplar físico do livro, autografado pela autora, mais de 300 páginas para você ir além da sua personalidade e despertar a sua verdade espiritual.
          </p>
        </div>

        <div className="relative mt-14 space-y-10">
          <span className="absolute bottom-0 left-[27px] top-0 w-px bg-[linear-gradient(180deg,var(--gold-2),var(--purple-2),transparent)]" />
          {gifts.map((g) => (
            <div key={g.n} className="relative flex gap-6 reveal">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold bg-ink font-serif text-[24px] text-gold-2 shadow-[var(--shadow-gold)]">
                {g.n}
              </div>
              <div className="glass relative flex-1 rounded-sm p-7">
                <span className="pointer-events-none absolute -top-4 right-4 select-none font-serif text-[120px] font-semibold leading-none text-transparent [-webkit-text-stroke:1px_oklch(0.74_0.11_85/18%)]">
                  {g.n}
                </span>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.16em] text-gold-2">{g.tag}</span>
                  <Sparkle className="h-4 w-4 text-gold-2" />
                </div>
                <h3 className="relative mb-2 font-serif text-[21px] font-medium">{g.h}</h3>
                <p className="relative text-[15px] text-paper-dim">{g.p}</p>
                {"detail" in g && g.detail && (
                  <p className="relative mt-4 border-t border-line pt-4 text-[13px] leading-relaxed text-paper-dim">{g.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="glass mt-14 rounded-sm p-7 reveal">
          {[
            ["1 livro físico", "R$ 97,90"],
            ["1 curso de 8 horas", "R$ 149,90"],
            ["Combo com 3 e-books + 2 materiais de apoio", "R$ 47,90"],
          ].map(([l, v]) => (
            <div key={l} className="flex items-center justify-between border-b border-line py-3 text-[15px] text-paper-dim">
              <span>{l}</span>
              <span className="line-through decoration-gold/60">{v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between pt-4 font-serif text-[18px]">
            <span>Valor total avulso</span>
            <span className="text-paper-dim line-through">R$ 295,70</span>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-sm border border-gold/50 bg-[linear-gradient(160deg,oklch(0.74_0.11_85/16%),oklch(0.14_0.03_225/70%))] p-10 text-center shadow-[var(--shadow-gold-lg)] reveal">
          <div className="absolute left-1/2 top-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-halo rounded-full bg-[radial-gradient(circle,oklch(0.83_0.1_88/25%),transparent_70%)] blur-2xl" />
          <div className="relative">
            <div className="text-[11px] tracking-[0.18em] text-gold-2">OFERTA ESPECIAL PARA OS 100 EXEMPLARES</div>
            <div className="text-gradient-gold mt-4 animate-shimmer font-serif leading-none" style={{ fontSize: "clamp(56px, 9vw, 84px)" }}>
              R$ 87,90
            </div>
            <div className="mt-3 font-serif text-[20px] italic">ou 12x de R$ 9,09</div>
            <div className="mt-1 text-[13px] text-paper-dim">+ frete</div>
            <div className="mt-8">
              <a href="#oferta" className="btn-cta">QUERO COMEÇAR MINHA TRAVESSIA →</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================= FINAL CTA ================= */
function FinalCta() {
  return (
    <Section tone="gold" className="py-28 text-center">
      <div className="orb left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,oklch(0.8_0.12_80/45%),transparent_72%)]" />
      <div className="stars-layer" />
      <Enneagram numbers className="pointer-events-none absolute left-1/2 top-1/2 w-[640px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-gold-2 opacity-[0.14]" />
      <Twinkles count={14} color="gold" />
      <div className="wrap-narrow relative z-10 reveal">
        <DividerMark className="mx-auto mb-8 w-[120px] text-gold-2" />
        <p className="font-serif text-[22px] italic leading-[1.45] text-gold-2 md:text-[26px]">
          Talvez agora esteja na hora de descobrir quem é você além de tudo aquilo que você aprendeu a ser.
        </p>
        <div className="mt-9">
          <div className="font-serif text-[22px] italic">Eneagrama Além das Personalidades</div>
          <div className="mt-1 text-[14px] text-paper-dim">O Despertar da Sua Verdade Espiritual</div>
          <div className="mt-3 text-[12px] tracking-[0.12em] text-gold-2">CECILÏA CORŔËA</div>
        </div>
        <div className="mt-10">
          <a href="#oferta" className="btn-cta">QUERO COMEÇAR MINHA TRAVESSIA →</a>
          <p className="mt-4 text-[13px] tracking-[0.02em] text-paper-dim">Livro + bônus exclusivos para os 100 primeiros leitores</p>
        </div>
      </div>
    </Section>
  );
}

/* ================= FAQ ================= */
const faqs = [
  ["Preciso conhecer Eneagrama?", "Não. A obra conduz o leitor dos fundamentos básicos às aplicações mais profundas."],
  ["E se eu já conhecer o Eneagrama?", "Esse livro vai te ajudar a ultrapassar a abordagem convencional de identificação dos tipos de personalidade."],
  ["É um livro religioso?", "A obra dialoga com espiritualidade, tradições ancestrais e conceitos de consciência, mas não propõe uma religião ou doutrina específica."],
  ["É um livro de desenvolvimento pessoal?", "Sim, mas vai além da proposta convencional de autoconhecimento."],
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="faq" className="bg-ink/70 py-20">
      <Constellation className="pointer-events-none absolute right-[8%] top-[10%] w-[240px] text-gold-2 opacity-50" />
      <div className="wrap-narrow relative z-10 reveal">
        <p className="eyebrow">Perguntas frequentes</p>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-serif text-[18px] transition-colors hover:text-gold-2"
              >
                {q}
                <span className={`font-sans text-[22px] font-light text-gold-2 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-400 ${open === i ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <p className="overflow-hidden text-[15px] text-paper-dim">{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
