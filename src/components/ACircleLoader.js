export default {
  name: 'a-circle-loader',

  props: {
    radius: Number,
    progress: Number,
    stroke: Number,
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      normalizedRadius,
      circumference,
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - percent / 100 * this.circumference;
    },
  },
  template: `
    <svg
      :height="radius * 2"
      :width="radius * 2"
    >
      <circle
        stroke="white"
        fill="transparent"
        :stroke-dasharray="circumference + ' ' + circumference"
        :style="{ strokeDashoffset }"
        :stroke-width="stroke"
        :r="normalizedRadius"
        :cx="radius"
        :cy="radius"
      />
    </svg>
  `,
};
