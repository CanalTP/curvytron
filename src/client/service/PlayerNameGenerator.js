/**
 * Room Name Generator
 */
function PlayerNameGenerator() {}

/**
 * Adjectives
 *
 * @type {Array}
 */
PlayerNameGenerator.prototype.adjectives = [
    'Awesome',
    'Amazing',
    'Great',
    'Fantastic',
    'Super',
    'Admirable',
    'Famous',
    'Fine',
    'Gigantic',
    'Grand',
    'Marvelous',
    'Mighty',
    'Outstanding',
    'Splendid',
    'Wonderful',
    'Big',
    'Super',
    'Smashing',
    'Sensational'
];

PlayerNameGenerator.prototype.nouns = [
    'Vincent',
    'Romain',
    'Antoine',
    'Simon',
    'Abder',
    'Stephen',
    'David',
    'Michel',
    'Virginie',
    'William',
    'Fraoucene',
    'Fahmi',
    'Remy'
];

/**
 * Get random name
 *
 * @return {String}
 */
PlayerNameGenerator.prototype.getName = function()
{
    return this.getAdjective() + ' ' + this.getNoun();
};

/**
 * Get random adjective
 *
 * @return {String}
 */
PlayerNameGenerator.prototype.getAdjective = function ()
{
    return this.adjectives[Math.floor(Math.random() * this.adjectives.length)];
};

/**
 * Get random noun
 *
 * @return {String}
 */
PlayerNameGenerator.prototype.getNoun = function ()
{
    return this.nouns[Math.floor(Math.random() * this.nouns.length)];
};
