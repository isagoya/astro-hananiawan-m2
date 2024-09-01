import { createElement } from "preact";

setHeadTitle();
setPagination();
setSubchapterHidden();

function setHeadTitle() {
  let h1_elements = document.getElementsByTagName('h1');
  let chapter_element = h1_elements.item(0);
  let chapter_title = chapter_element.textContent;

  // console.log(chapter_title);
  // head要素を取得
  // const head = document.head;
  // // 最後の子要素の後に<title>を追加
  //   head.insertAdjacentHTML('beforeend', '<title>Hana ni Awan•' + chapter_title + '</title>');

  const title_element = document.getElementsByTagName('title')
  title_element.item(0).textContent = `Hana ni Awan • ${chapter_title}`
}

function setPagination() {

  // チャプター番号（ページ番号）を得る
  let chapter_num = document.getElementById('chapter_num').textContent;

  // console.log(chapter_num);

  // ページネイションの設定
  let prev = document.getElementById('prev');
  let prev_url
  if (Number(chapter_num) == 1) {
    prev_url = '../index.html#'
    // console.log(prev_url);
  } else {
    prev_url = `/chapt-${Number(chapter_num) - 1}/index.html#`;
    // console.log(prev_url);
  }
  prev.firstElementChild.setAttribute('href', prev_url)
  let active = document.getElementById('active');
  active.firstElementChild.textContent = chapter_num;
  // console.log(active.firstElementChild.textContent);
  let next = document.getElementById('next');
  let next_url = `/chapt-${Number(chapter_num) + 1}/index.html#`
  next.firstElementChild.setAttribute('href', next_url)
  // 11ページまでを表示する
  // 13ページまでを表示する
  if (Number(chapter_num) > (13 - 1)) {
    next.setAttribute('style', 'visibility: hidden;');
  }
}


function setSubchapterHidden() {
  // 12、13ページは　チャプターとサブチャプターの名前が同じなので、サブチャプターの表示を消す。
  const chapter_num_element = document.getElementById('chapter_num');
  const chapter_num = chapter_num_element.textContent;
  const h2_element = document.getElementsByTagName("h2");
  if (Number(chapter_num) >= 12) {
      h2_element[0].style.visibility = "hidden"
  }
  {/* console.log(h1_element); */}
}
