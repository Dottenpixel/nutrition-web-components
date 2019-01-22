import { Component, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'nutri-score',
    styleUrl: 'nutri-score.scss',
    shadow: true
})
export class NutriScore {
    /**
     * The score
     */
    @Prop({ mutable: true }) score: string;

    @Watch('score')
    validateScore() {
        if (
            !(
                this.score === 'A' ||
                this.score === 'B' ||
                this.score === 'C' ||
                this.score === 'D' ||
                this.score === 'E'
            )
        ) {
            this.score = 'A';
        }
    }

    render() {
        return (
            <div class="container">
                <div class="title">NUTRI-SCORE</div>
                <div class="scores-container">
                    <div class="scores">
                        <span class="a">A</span>
                        <span class="b">B</span>
                        <span class="c">C</span>
                        <span class="d">D</span>
                        <span class="e">E</span>
                    </div>
                    <div class={'score ' + this.score.toLowerCase()}>
                        {this.score}
                    </div>
                </div>
            </div>
        );
    }
}
