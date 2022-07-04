import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

/**
 * StorybookのStoryをインポートした後、
 * composeStoriesを利用してテストで利用できる
 * コンポーネントへ変換する。
 */

const { Default } = composeStories(stories);

/**
 * テストケース
 */
test("render button with default args", () => {
  render(<Default>Button</Default>);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});
