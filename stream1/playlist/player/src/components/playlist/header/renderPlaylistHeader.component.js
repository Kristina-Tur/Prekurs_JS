export function renderPlayListHeader(inputPlayList) {
  renderPlayListHeaderTitle(inputPlayList);
  renderPlayListHeaderCover(inputPlayList);
}

function renderPlayListHeaderCover(inputPlayList) {
  const headerCoverElement = document.createElement("img");
  headerCoverElement.src = inputPlayList.coverImageUrl;
  headerCoverElement.style.width = "150px";
  headerCoverElement.style.height = "150px";
  document.body.append(headerCoverElement);
}

function renderPlayListHeaderTitle(inputPlayList) {
  const headerTitleElement = document.createElement("h1");
  headerTitleElement.append(inputPlayList.title);
  document.body.append(headerTitleElement);
}