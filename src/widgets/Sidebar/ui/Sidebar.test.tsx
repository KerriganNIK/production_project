import {screen, fireEvent} from "@testing-library/react";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar";
import {renderWithTranslation} from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar-test')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        renderWithTranslation(<Sidebar/>);
        fireEvent.click(screen.getByTestId('toggle-button'));
        expect(screen.getByTestId('sidebar-test')).toHaveClass("collapsed");
    });
});