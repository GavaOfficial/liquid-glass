import {
  codegenNativeComponent,
  type ViewProps,
  type ColorValue,
  type CodegenTypes,
} from 'react-native';

export interface NativeProps extends ViewProps {
  /**
   * Make the view respond to user interactions.
   * Interactive view grow on touch and show a shimmer effect.
   *
   * Defaults to `false`.
   */
  interactive?: boolean;
  /**
   * The variant of the liquid glass material.
   * You can toggle between 'clear', 'regular', and 'none' to materialize the glass.
   *
   * Defaults to 'regular'.
   */
  effect?: CodegenTypes.WithDefault<'clear' | 'regular' | 'none', 'regular'>;
  /**
   * The color of the glass effect.
   *
   * Defaults to `transparent`.
   */
  tintColor?: ColorValue;
  /**
   * The color scheme of the glass effect.
   * The effect appears dark or light based on the color scheme.
   *
   * Defaults to 'system'.
   */
  colorScheme?: CodegenTypes.WithDefault<'light' | 'dark' | 'system', 'system'>;
  /**
   * The shape of the glass effect.
   * - 'rect': rectangular with user-defined borderRadius
   * - 'capsule': pill shape with fully rounded ends
   * - 'circle': circular shape using min(width, height) / 2
   *
   * Note: 'capsule' and 'circle' ignore the borderRadius style property.
   *
   * Defaults to 'rect'.
   */
  shape?: CodegenTypes.WithDefault<'rect' | 'capsule' | 'circle', 'rect'>;
}

export default codegenNativeComponent<NativeProps>('LiquidGlassView');
