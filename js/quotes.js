const quotes = [
  {
    quote: "失っても失っても生きていくしかないです。どんなに打ちのめされようと。",
    author: "-竈門炭治郎-",
  },
  {
    quote: "幸せかどうかは自分で決める。大切なのは”今”なんだよ。前を向こう。一緒に頑張ろうよ。戦おう。.",
    author: "-竈門禰豆子-",
  },
  {
    quote:
      "生殺与奪の権を他人に握らせるな！",
    author: "-冨岡義勇-",
  },
  {
    quote: "老いることも死ぬことも人間という儚い生き物の美しさだ。老いるからこそ、死ぬからこそ、堪らなく愛おしく尊いのだ。 ",
    author: "-煉獄杏寿郎-",
  },
  {
    quote: "失っても、失っても、生きていくしかないです。どんなに打ちのめされようと。",
    author: "-竈門炭治郎-",
  },
  {
    quote: "頑張れ！人は心が原動力だから、心はどこまでも強くなれる！",
    author: "-竈門炭治郎-",
  }
];

const quote = document.querySelector("#quote>span:first-child");
const author = document.querySelector("#quote>span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;