  // // URLを取得
  // let url = new URL(window.location.href);

  // //URLのハッシュタグを取得
  // let urlHash = url.hash;
  // console.log(urlHash);

  // // URLSearchParamsオブジェクトを取得
  // let params = url.searchParams;

  // // getメソッド
  // let chapter_num = params.get('num')
  // console.log(params.get('num')); // 5

  // // // ファイル名を得る
  // // //パスを取得
  // // var path = location.pathname;
  // // //「/」で区切って配列化
  // // var pathinfo = path.split('/');
  // // //最後の要素（ファイル名）だけ抜き出し
  // // var filename = pathinfo.pop();
  // // console.log(filename);

  // // ページネイションの設定
  // let prev = document.getElementById('prev');
  // let prev_url
  // if(chapter_num == 1) {
  //   prev_url = 'index.html#'
  // } else {
  //   prev_url = `chapt.html?num=${Number(chapter_num) - 1}#`
  // }
  // prev.firstElementChild.setAttribute('href', prev_url)
  // let active = document.getElementById('active');
  // active.firstElementChild.textContent = chapter_num;
  // let next = document.getElementById('next');
  // let next_url = `chapt.html?num=${Number(chapter_num) + 1}#`
  // next.firstElementChild.setAttribute('href', next_url)
  // // 11ページまでを表示する
  // if (Number(chapter_num) > (11 - 1)) {
  //   next.setAttribute('style', 'visibility: hidden;');
  // }


  // // #contents に表示するデータを差し込む
  // const contents = document.getElementById('contents');

  // let htmlData = '';

  // // コンテンツ表示用の html テキストファイルを読み込む
  // let txt = new XMLHttpRequest();

  // txt.onreadystatechange = function() {
  // console.log("readyState の値 : " + txt.readyState);
  // switch(txt.readyState) {
  //   // http://kneesockscollector.blog.fc2.com/blog-entry-214.html
  //     case 0:
  //         //読込開始前
  //         break;

  //     case 1:
  //         //読込中
  //         break;

  //     case 2:
  //         //とりあえず読み込んだ
  //         break;

  //     case 3:
  //         //読み込んだデータ解析中
  //         break;

  //     case 4:
  //         //処理完了。解析は失敗した可能性もあり
  //         htmlData += txt.responseText;
  //         contents.innerHTML = htmlData;
  //         setHeadTitle();
  //         setDonationHtml();
  //         break;

  //     default:
  //         break;
  //     }
  // }
  // // filename.split('.')[0]
  // filePath = `./data/chapt${chapter_num}_inner.html`
  // txt.open('GET', filePath, true);
  // console.log(filePath);
  // try {
  //   txt.send(null);
  // } catch (error) {
  //   console.log(error);
  // }
  // // console.log(txt.responseText);
  // // contents.innerHTML = txt.responseText;
  // function setHeadTitle(){
  //   let h1_elements = document.getElementsByTagName('h1');
  //   let chapter_element = h1_elements.item(0);
  //   let chapter_title = chapter_element.textContent;
  //   // チャプター番号（ページ番号）を得る
  //   // let chapter_num = document.getElementById('chapter_num').textContent;
    
  //   console.log(chapter_num);

  //   // head要素を取得
  //   const head = document.head;
  //   // 最後の子要素の後に<title>を追加
  //   head.insertAdjacentHTML('beforeEnd', '<title>Hana ni Awan•' + chapter_title + '</title>');
  // }

  // function setDonationHtml(){
  //   let header_element = document.getElementsByTagName('header').item(0);
  //   console.log(header_element);
  //   let donation_element = `
  //   <div id="donation" class="row justify-content-start" style="padding-top:0; padding-bottom:0; margin:0 10px;">
  //   <div class="col-md-4" style="text-align: center;">
  //     <a href="https://syncable.biz/en/associate/rainbow-culion/business/1518" style="text-decoration: none; color:#000;"><img src="./assets/images/Syncable_logo.png" style="width:30px; margin-right: 10px;"/>donate to this translation
  //       project</a>
  //     </div>
  //   </div>
  //   `;
  //   header_element.insertAdjacentHTML('beforebegin', donation_element);

  // }
  


  setHeadTitle();

  function setHeadTitle(){
    let h1_elements = document.getElementsByTagName('h1');
    let chapter_element = h1_elements.item(0);
    let chapter_title = chapter_element.textContent;
    // チャプター番号（ページ番号）を得る
    let chapter_num = document.getElementById('chapter_num').textContent;
    
    console.log(chapter_num);

      // ページネイションの設定
  let prev = document.getElementById('prev');
  let prev_url
  if(Number(chapter_num) == 1) {
    prev_url = 'index.html#'
    console.log(prev_url);
  } else {
    prev_url = `chapt-${Number(chapter_num) - 1}.html#`;        
    console.log(prev_url);
  }
  prev.firstElementChild.setAttribute('href', prev_url)
  let active = document.getElementById('active');
  active.firstElementChild.textContent = chapter_num;
  console.log(active.firstElementChild.textContent);
  let next = document.getElementById('next');
  let next_url = `chapt-${Number(chapter_num) + 1}.html#`
  next.firstElementChild.setAttribute('href', next_url)
  // 11ページまでを表示する
  if (Number(chapter_num) > (11 - 1)) {
    next.setAttribute('style', 'visibility: hidden;');
  }

    console.log(chapter_title);
    // head要素を取得
    // const head = document.head;
    // // 最後の子要素の後に<title>を追加
    //   head.insertAdjacentHTML('beforeend', '<title>Hana ni Awan•' + chapter_title + '</title>');
    
    const title_element = document.getElementsByTagName('title')
    title_element.item(0).textContent = `Hana ni Awan • ${chapter_title}`
  }
