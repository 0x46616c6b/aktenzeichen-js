/**
 * Aktenzeichen
 */
class Aktenzeichen {
    /**
     * @param string
     */
    constructor(string) {
        const pattern = /([a-zA-Z0-9]*) ([a-zA-z]*) ?([0-9]*) ?([a-zA-z]*) ([0-9]+)\/([0-9]{2})/i;
        let matches = pattern.exec(string);

        if (matches instanceof Array) {
            this._courtNumber = matches[1];
            this._courtType = matches[2];
            this._prosecutorNumber = matches[3];
            this._prosecutorType = matches[4];
            this._reference = matches[5];
            this._year = matches[6];
        }
    }

    /**
     *
     * @returns {*}
     */
    courtNumber() {
        return this._courtNumber;
    }

    /**
     *
     * @returns {*}
     */
    courtType() {
        return this._courtType;
    }

    /**
     *
     * @returns {*}
     */
    prosecutorNumber() {
        return this._prosecutorNumber;
    }

    /**
     *
     * @returns {*}
     */
    prosecutorType() {
        return this._prosecutorType;
    }

    /**
     *
     * @returns {*}
     */
    reference() {
        return this._reference;
    }

    /**
     *
     * @returns {*}
     */
    year() {
        return this._year;
    }
}

module.exports = Aktenzeichen;
