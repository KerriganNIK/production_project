import { Input, ThemeInput } from "@/shared/ui/Input/Input";
import { render, screen } from "@testing-library/react";

describe('Input.test', () => {
    test('Test render', () => {
        render(<Input value="test" />);
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    });

    test('Test theme default', () => {
        render(<Input theme={ThemeInput.default} value='test' />);
        expect(screen.getByDisplayValue('test')).toHaveClass('default');
    });
});