const Aktenzeichen = require('./Aktenzeichen');

test('212 Ds 142 Js 7294/17 should pass', () => {
    let aktenzeichen = new Aktenzeichen('212 Ds 142 Js 7294/17');

    expect(aktenzeichen.courtNumber()).toBe("212");
    expect(aktenzeichen.courtType()).toBe("Ds");
    expect(aktenzeichen.prosecutorNumber()).toBe("142");
    expect(aktenzeichen.prosecutorType()).toBe("Js");
    expect(aktenzeichen.reference()).toBe("7294");
    expect(aktenzeichen.year()).toBe("17");
});

test('1 StR 287/05 should pass', () => {
    let aktenzeichen = new Aktenzeichen('1 StR 287/05');

    expect(aktenzeichen.courtNumber()).toBe("1");
    expect(aktenzeichen.courtType()).toBe("StR");
    expect(aktenzeichen.prosecutorNumber()).toBe("");
    expect(aktenzeichen.prosecutorType()).toBe("");
    expect(aktenzeichen.reference()).toBe("287");
    expect(aktenzeichen.year()).toBe("05");
});

test('VIII ZR 350/03 should pass', () => {
    let aktenzeichen = new Aktenzeichen('VIII ZR 350/03');

    expect(aktenzeichen.courtNumber()).toBe("VIII");
    expect(aktenzeichen.courtType()).toBe("ZR");
    expect(aktenzeichen.prosecutorNumber()).toBe("");
    expect(aktenzeichen.prosecutorType()).toBe("");
    expect(aktenzeichen.reference()).toBe("350");
    expect(aktenzeichen.year()).toBe("03");
});

test('34 O 13/04 should pass', () => {
    let aktenzeichen = new Aktenzeichen('34 O 13/04');

    expect(aktenzeichen.courtNumber()).toBe("34");
    expect(aktenzeichen.courtType()).toBe("O");
    expect(aktenzeichen.prosecutorNumber()).toBe("");
    expect(aktenzeichen.prosecutorType()).toBe("");
    expect(aktenzeichen.reference()).toBe("13");
    expect(aktenzeichen.year()).toBe("04");
});

test('Invalid #1 should pass', () => {
    let aktenzeichen = new Aktenzeichen('Invalid');

    expect(aktenzeichen.courtNumber()).toBe(undefined);
    expect(aktenzeichen.courtType()).toBe(undefined);
    expect(aktenzeichen.prosecutorNumber()).toBe(undefined);
    expect(aktenzeichen.prosecutorType()).toBe(undefined);
    expect(aktenzeichen.reference()).toBe(undefined);
    expect(aktenzeichen.year()).toBe(undefined);
});
