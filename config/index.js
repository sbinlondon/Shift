import { version } from '../package.json'

// ?? 🤔 ?? --> https://en.freesewing.dev/packages/core/config

export default {
  name: '18shift',
  version,
  design: 'Zee',
  code: 'Zee',
  department: 'womenswear',
  type: 'pattern',
  difficulty: 3,
  tags: [
    'freesewing',
    'design',
    'diy',
    'fashion',
    'made to measure',
    'parametric design',
    'pattern',
    'sewing',
    'sewing pattern'
  ],
  optionGroups: {
    fit: ['bodyEase']
  },
  measurements: ['chest', 'hips', 'hpsToWaistBack','waistToKnee', 'shoulderToShoulder', 'neck' ],
  dependencies: {},
  inject: {},
  hide: [],
  parts: ['body'],
  options: {
    hipEase: {pct: 50, min:50, max: 100 },
    neckDepthFront:{pct: 50, min: 50, max: 70},
    neckDepthBack:{pct: 50, min: 50, max: 60},
    
   
  }
}
