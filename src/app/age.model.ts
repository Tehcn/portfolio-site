export class Age {
    public years: number;
    public months: number;
    public days: number;

    constructor(years: number, months: number, days: number) {
        this.years = years;
        this.months = months;
        this.days = days;
    }

    toString() {
        return `${this.years} years ${this.months} months ${this.days} days`;
    }

    getYears() {
        return this.years;
    }

    getMonths() {
        return this.months + (this.years * 12);
    }

    getDays() {
        return this.days + ((this.years * 12) * 30.5);
    }
}