import java.util.Scanner;
import java.util.ArrayList;
/*
ArrayList 주요 메소드
    add(object) 객체를 리스트에 추가
    get(index): 지정된 인덱스의 요소를 반환합니다. 인덱스는 0부터 시작합니다.
    size(): 리스트에 저장된 요소의 개수를 반환합니다.
    remove(index): 지정된 인덱스의 요소를 삭제합니다.
    remove(object):
        지정된 객체와 동일한 첫 번째 요소를 삭제합니다. 객체 비교를
        위해 Task 클래스에 equals() 메소드가 오버라이드되어 있어야 정확하게
        동작합니다.
    isEmpty(): 리스트가 비어있는지 확인합니다.
    clear(): 리스트의 모든 요소를 삭제합니다.
 */
import java.util.List;

public class Main {

    public static List<Task> tasks = new ArrayList<>();

    public static void main(String[] args) {


        System.out.println("Hello, World!");

        Scanner scanner = new Scanner(System.in);
        boolean isRunning = true;

        System.out.println("콘솔 할 일 목록 관리 앱 시작!");
        while (isRunning) {
            System.out.println("1. 할 일 추가");
            System.out.println("2. 할 일 목록 보기");
            System.out.println("3. 종료");
            System.out.print("메뉴를 선택하세요: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // nextInt() 후의 줄바꿈 문자 소비

            switch (choice) {
                case 1:
                    System.out.print("추가할 할 일 내용을 입력하세요: ");
                    String description = scanner.nextLine();
                    Task newTask = new Task(description); // Task 객체 생성
                    tasks.add(newTask);

                    System.out.println("새 할 일이 생성되었습니다: " + newTask); // toString() 호출됨
                    break;
                case 2:
                    System.out.println("===============================================");
                    System.out.println("할 일 목록");
                    if (tasks.isEmpty()) {
                        System.out.println("등록된 할 일이 없습니다.");
                    } else {
                        for (int i = 0; i < tasks.size(); i++) {
                            System.out.println((i + 1) + "." + tasks.get(i));
                            System.out.println((i + 1) + "." + tasks.get(i).getDescription());

                        }
                    }
                    System.out.println("===============================================");
                    break;
                case 3:
                    System.out.println("앱을 종료합니다");
                    isRunning = false;
                    break;
                default:
                    System.out.println("잘못된 입력입니다. 다시 선택해주세요.");
                    break;
            }
        }
        scanner.close(); // Scanner 자원 해제
    }
}