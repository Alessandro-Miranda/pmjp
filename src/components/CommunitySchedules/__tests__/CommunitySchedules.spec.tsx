import { beforeEach, describe, test } from '@jest/globals';
import { composeStories } from '@storybook/testing-react';
import { cleanup, render, screen } from '@testing-library/react';
import * as Stories from './CommunitySchedules.stories';

describe('Comunity Schedules component', () => {
  beforeEach(cleanup);

  const { Default, WithoutTitle } = composeStories(Stories);

  test('Component should be in the document with correctly text content', () => {
    const { getByTestId } = render(<Default />);

    expect(getByTestId('schedules-title')).toHaveTextContent('Missas');
    expect(getByTestId('schedule-day-Quarta-feira-19:30')).toHaveTextContent('Quarta-feira');
    expect(getByTestId('schedule-hour-Quarta-feira-19:30')).toHaveTextContent('19:30');
    expect(getByTestId('schedule-day-Domingo-10:00')).toHaveTextContent('Domingo');
    expect(getByTestId('schedule-hour-Domingo-10:00')).toHaveTextContent('10:00');

    cleanup();

    render(<WithoutTitle {...WithoutTitle.args} />);

    expect(screen.queryByTestId('schedules-title')).not.toBeInTheDocument();
  });
});
