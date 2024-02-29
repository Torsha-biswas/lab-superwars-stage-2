describe("Building player blocks", function () {
  it("should return a template for the players", function () {
    let players = initPlayers(TEST_PLAYERS);
    let fragment = buildPlayers(players, 'hero');

    // Create a dummy div element to append the fragment
    let dummyDiv = document.createElement('div');
    dummyDiv.innerHTML = fragment;

    // Create a div element for the expected HTML template
    let expectedDiv = document.createElement('div');
    expectedDiv.innerHTML = `
      <div class="player">
          <img src="${players[0].image}" alt="">
          <div class="name">${players[0].name}</div>
          <div class="strength">${players[0].strength}</div>
      </div>`.trim();

    // Compare the normalized HTML strings
    expect(dummyDiv.innerHTML.trim()).toEqual(expectedDiv.innerHTML.trim());
  });
});
