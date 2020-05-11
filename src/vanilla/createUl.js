import createLi from './createLi';

export default function (listeDeTweet) {
  let ul = document.createElement('ul');

  listeDeTweet.forEach(tweet => {
    const li = createLi(tweet);
    ul.append(li);
  });

  // listeDeTweet.map(createLi).forEach(function (li) {
  //   ul.append(li);
  // });

  return ul;
}
