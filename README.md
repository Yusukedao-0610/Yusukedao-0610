<wh1 align="center">Hi 👋, I'm Yusuke Ishikawa.石川　佑輔といいます。日本の友達からはゆうくん海外の友達からはyusuって呼ばれてます　</h1>
<h3 align="center">17 y/o(歳) Developer from Japan</h3>

<p align="center">
Web / Backend / Low-level / Security
</p>

---

## 🧠 About Me
開発は完全に独学です。
プログラミング自体には12歳頃からテレビをきっかけに興味を持ち、ノートパソコンで個人的に触り始めました。

その後、AIツールが普及し始めた2022年頃から本格的に学習を進め、13〜14歳の頃にAIを活用しながら開発スキルを体系的に身につけてきました。

現在は実際に動くプロジェクトの開発や、低レイヤー領域・バックエンドなど幅広い分野に取り組んでいます。

- C/C++, JavaScript, TypeScript を中心に開発  
- Webアプリの設計〜バックエンドAPIまで対応可能  
- Linuxでのインフラ構築経験あり  
- Windowsでカーネルドライバなど低レイヤー開発  
- QEMU + KVM を拡張し、VM検知を回避したマルウェア解析環境を構築
- EFIレベルでの低レイヤー開発経験（ブートプロセスやOS起動前環境の理解など)
低レイヤー分野に興味を持ったきっかけは、身近なトラブル対応でした。
兄のPCの動作が極端に重くなり、原因を調べるためにタスクマネージャーを確認したところ、不審なプロセスが複数動作しており、一時フォルダ（Temp）内に大量の実行ファイル（.exe）が存在していることに気づきました。

そこで、これらのプログラムの解析を行いました。
まず 静的解析（プログラムを実行せずに中身を調べる手法）として、IDA Proを使用し、バイナリを逆アセンブルして処理内容を確認しました。具体的には、どのAPIが呼ばれているかや、不審な処理フロー（ループや通信処理など）を読み取ることで、プログラムの挙動を把握しました。

次に、動的解析（実際にプログラムを動かしながら挙動を観察する手法）として、NetLimiterを用いて通信の流れを監視し、外部サーバとの接続やデータ送信の有無を確認しました。

その結果、このプログラムは暗号通貨マイニング（ビットコインマイナー）を行うだけでなく、PC内の情報を収集し外部に送信する機能を持つマルウェアであることを特定しました。

この経験をきっかけに、プログラムがどのようにOS上で動作しているのか、メモリやプロセスがどのように管理されているのかといった、より低レイヤーの仕組みに興味を持つようになりました。

現在はその理解を深めるために、QEMU + KVM（仮想マシン環境）をベースに、マルウェアが仮想環境であることを検知できないように調整しながら、ホストPC側から仮想マシン内のメモリをリアルタイムで読み取り・解析できる仕組みを研究・開発しています。
（※一部のマルウェアは仮想環境だと判断すると動作を変えるため、その回避が必要になります）

なお、安全性の観点から通信先のURLなどの詳細は公開していませんが、該当ドメインについては既に適切な窓口へ通報済みです。。

現在は実務経験を積みながら、より実践的なスキルを高めています。

---

## 🚀 Main Focus/今頑張ってること

- Backend: Node.js / API 設計・実装
- Low-level: C/C++ / カーネル・ドライバ開発
- System: パフォーマンス最適化・リソース制御
- Security: マルウェア解析・挙動調査
---

## 🔗 Connect with me

<p align="left">
  <a href="https://www.youtube.com/@yusukedao75?feature=shared" target="blank">
    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
         height="30" width="40" />
  </a>
  <a href="https://discord.gg/e9wh2hvREE" target="blank">
    <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
         height="30" width="40" />
  </a>
</p>

---

## 🛠 Tech Stack

<p align="left">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" width="40" height="40"/>
</p>

---

## 🧩 Featured Projects

- **AI Vision 自動化ツール**  
  画像認識 × ハードウェア制御の連携ツール
- **商品販売サイト（フロントエンド）**  
  使いやすさを意識したレスポンシブ設計
- **バックエンドシステム（Node.js + API）**  
  拡張性と保守性を両立したサーバー実装
- **低レイヤー・ドライバ関連**  
  カーネルレベルでの制御・最適化に挑戦
---

## Contact/連絡先

yusuke20080610@gmail.com
Discord yusukedao
