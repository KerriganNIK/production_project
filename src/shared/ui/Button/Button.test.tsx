import {render, screen} from '@testing-library/react';
import {Button, SizeButton, ThemeButton} from "@/shared/ui/Button/Button";

describe('Button', () => {
    test('Test render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test theme clear button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

    test('Test theme outline button', () => {
        render(<Button theme={ThemeButton.OUTLINE}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('outline');
    });

    test('Test theme background button', () => {
        render(<Button theme={ThemeButton.BACKGROUND}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('background');
    });

    test('Test theme background inveted button', () => {
        render(<Button theme={ThemeButton.BACKGOUND_INVERTED}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('backgroundInverted');
    });

    test('Test render square button', () => {
        render(<Button size={SizeButton.M} square>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('square');
    });

    test('Test render size M button', () => {
        render(<Button size={SizeButton.M} square>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('size_M');
    });

    test('Test render size L button', () => {
        render(<Button size={SizeButton.L} square>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('size_L');
    });

    test('Test render size XL button', () => {
        render(<Button size={SizeButton.XL} square>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('size_XL');
    });
});
