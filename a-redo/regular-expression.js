/// ***** REGULAR EXPRESSIONS *****

// source: <https://www.w3schools.com/js/js_regexp.asp> and <https://www.w3schools.com/jsref/jsref_obj_regexp.asp>

// SYNTAX:      /pattern/modifiers

// MODIFIERS        i, g, m  ...
// EXPRESSIONS      [aAbBcC], [0-9], [a|b|c], [^abc], [^0-9]  ...
// METACHARACTERS   /d, /s, /b, /uxxxx  ...
// QUANTIFIERS      n+, n*, n?  ...

// .test() - ??? RegEx method ???
// .exec() - ??? RegEx method ???

// ======================================================================

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec augue varius, vestibulum diam id, cursus erat. Fusce elit nisl, ullamcorper sed augue in, mollis consequat metus. Cras hendrerit tristique odio in dignissim. Quisque dolor sapien, feugiat quis tempor consectetur, pulvinar at ex. Suspendisse sed orci molestie, finibus ex id, consequat quam. Quisque hendrerit libero sit amet diam tempor mollis. Donec posuere pharetra tortor in varius. Aliquam ornare purus at ipsum vestibulum convallis. Praesent quis lacus quis augue commodo posuere et in libero. Vivamus sit amet ligula ac est eleifend mollis dignissim eget lectus. Phasellus vel tellus id lorem condimentum blandit. Pellentesque pellentesque consequat metus nec malesuada. Maecenas scelerisque mi libero, at cursus purus tempus ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque, orci quis varius aliquet, orci quam semper arcu, vel pellentesque augue lorem eget tellus. Fusce sed nunc massa. Mauris consequat leo velit, sagittis aliquet urna volutpat eu. Integer ac tortor justo. Fusce sit amet euismod nulla, sed fringilla nibh. Maecenas nunc sem, feugiat commodo vehicula quis, suscipit vel metus. Mauris malesuada consequat purus, eu posuere augue congue scelerisque. Integer volutpat iaculis augue, at cursus justo dictum rutrum. Ut vehicula est vitae diam scelerisque lobortis. Mauris pellentesque lobortis nunc, eget sollicitudin odio ultrices eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ut iaculis turpis. Aenean nec suscipit nisl, id semper enim. Aliquam sed felis congue, lacinia justo ac, aliquam odio. Donec ac purus nunc. Fusce quis nunc arcu. Praesent lacinia tempor diam in tristique. Cras at tortor vitae ipsum sodales rutrum. Nulla facilisi. Nam interdum nisl id cursus elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod ex eu nunc dapibus convallis. Etiam enim nisi, dictum quis ex ut, cursus volutpat velit. Sed tincidunt est sit amet mauris varius porttitor in et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lobortis tristique urna nec ullamcorper. Mauris a bibendum neque. Proin in tristique ante. Nulla pellentesque mi vitae dignissim dictum. Donec augue justo, lobortis vitae neque ac, porttitor convallis neque. Quisque sed dictum lorem. Vivamus sit amet ullamcorper mauris, non posuere dui. Aenean quis mollis leo, vitae sollicitudin tortor. In libero diam, gravida quis arcu et, convallis aliquet mauris. Pellentesque nec sollicitudin nisi. Sed gravida nibh feugiat diam interdum, quis malesuada ex tempor. Nunc elementum lacinia ullamcorper. Nullam imperdiet, nibh sed molestie laoreet, orci libero congue turpis, ut tristique tortor eros non neque.'
const words = text.replace(/,|\./g, '').split(' ');
const phrases = text.split('.');
const characters = text.length;
const charWithoutSpace = text.replace(/ /g, '');
const lettersOnly = text.replace(/ |,|\./g, '');
const lettersI = text.match(/[I]/gi);
const lettersA = text.match(/a/gi);
const vowels = text.match(/[aeiouy]/gi);
const consonants = text.match(/[bcdfghjklmpqrstvxwzn]/gi);
const punctuationMarks = text.match(/[,\.:;!?/-]/g);
// const ditongos = text.match(/[aa|ae|ai|ao|au|ay|ea|ee|ei|eo|eu|ey|ia|ie|ii|io|iu|iy|oa|oe|oi|oo|ou|oy|ua|ue|ui|uo|uu|uy|ya|ye|yi|yo|yu|yy]/gi);
// const tritongos = ...

const example1 = text.match(/[^0123456789abcdefghijklmnopqrstuvxwyz]/gi);
const example2 = text.replace(/[^0123456789abcdefghijklmnopqrstuvxwyz]/gi, '');

console.log (
    `This text contains:
    Characters (with space): ${characters}
    Characters (without space): ${charWithoutSpace.length}
    Letters: ${lettersOnly.length}
    Phrases: ${phrases.length}
    Words: ${words.length}
    Vowels: ${vowels.length}
    Consonants: ${consonants.length}
    Punctuation Marks: ${punctuationMarks.length}`
    // Ditongos: ${ditongos.length}
    // Tritongos: ${tritongos.length}
, '\n');

console.log (
    `This text contains:
    Letters: ${lettersOnly}
    Phrases: ${phrases}
    Words: ${words}
    Vowels: ${vowels}
    Consonants: ${consonants}
    Punctuation Marks: ${punctuationMarks}`
    // Ditongos: ${ditongos}
    // Tritongos: ${tritongos.length}
);

console.log(example1);
console.log(example2);

// ======================================================================
/*
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec augue varius, vestibulum diam id, cursus erat. Fusce elit nisl, ullamcorper sed augue in, mollis consequat metus. Cras hendrerit tristique odio in dignissim. Quisque dolor sapien, feugiat quis tempor consectetur, pulvinar at ex. Suspendisse sed orci molestie, finibus ex id, consequat quam. Quisque hendrerit libero sit amet diam tempor mollis. Donec posuere pharetra tortor in varius. Aliquam ornare purus at ipsum vestibulum convallis. Praesent quis lacus quis augue commodo posuere et in libero.
Vivamus sit amet ligula ac est eleifend mollis dignissim eget lectus. Phasellus vel tellus id lorem condimentum blandit. Pellentesque pellentesque consequat metus nec malesuada. Maecenas scelerisque mi libero, at cursus purus tempus ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pellentesque, orci quis varius aliquet, orci quam semper arcu, vel pellentesque augue lorem eget tellus. Fusce sed nunc massa.
Mauris consequat leo velit, sagittis aliquet urna volutpat eu. Integer ac tortor justo. Fusce sit amet euismod nulla, sed fringilla nibh. Maecenas nunc sem, feugiat commodo vehicula quis, suscipit vel metus. Mauris malesuada consequat purus, eu posuere augue congue scelerisque. Integer volutpat iaculis augue, at cursus justo dictum rutrum. Ut vehicula est vitae diam scelerisque lobortis. Mauris pellentesque lobortis nunc, eget sollicitudin odio ultrices eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ut iaculis turpis. Aenean nec suscipit nisl, id semper enim.
Aliquam sed felis congue, lacinia justo ac, aliquam odio. Donec ac purus nunc. Fusce quis nunc arcu. Praesent lacinia tempor diam in tristique. Cras at tortor vitae ipsum sodales rutrum. Nulla facilisi. Nam interdum nisl id cursus elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod ex eu nunc dapibus convallis.
Etiam enim nisi, dictum quis ex ut, cursus volutpat velit. Sed tincidunt est sit amet mauris varius porttitor in et arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec lobortis tristique urna nec ullamcorper. Mauris a bibendum neque. Proin in tristique ante. Nulla pellentesque mi vitae dignissim dictum. Donec augue justo, lobortis vitae neque ac, porttitor convallis neque. Quisque sed dictum lorem. Vivamus sit amet ullamcorper mauris, non posuere dui. Aenean quis mollis leo, vitae sollicitudin tortor. In libero diam, gravida quis arcu et, convallis aliquet mauris. Pellentesque nec sollicitudin nisi. Sed gravida nibh feugiat diam interdum, quis malesuada ex tempor. Nunc elementum lacinia ullamcorper. Nullam imperdiet, nibh sed molestie laoreet, orci libero congue turpis, ut tristique tortor eros non neque.

Generated 5 paragraphs, 423 words, 2902 bytes of Lorem Ipsum

source: <https://www.lipsum.com>
*/