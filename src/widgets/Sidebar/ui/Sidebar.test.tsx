import {screen, fireEvent} from "@testing-library/react";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar";
import {renderWithTranslation} from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {MemoryRouter as Router} from "react-router-dom";

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(
            <Router>
                <Sidebar />
            </Router>
        );
        expect(screen.getByTestId('sidebar-test')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        renderWithTranslation(
            <Router>
                <Sidebar/>
            </Router>
        );
        fireEvent.click(screen.getByTestId('toggle-button'));
        expect(screen.getByTestId('sidebar-test')).toHaveClass("collapsed");
    });
});